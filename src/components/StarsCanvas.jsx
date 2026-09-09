import { useEffect, useRef } from 'react';

export default function StarsCanvas({ count = 180 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animId;

    const stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.3,
      alpha: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.008 + 0.003,
      drift: (Math.random() - 0.5) * 0.15,
    }));

    // Shooting stars
    let shooters = [];
    const spawnShooter = () => ({
      x: Math.random() * width * 0.8,
      y: Math.random() * height * 0.4,
      len: Math.random() * 80 + 40,
      speed: Math.random() * 6 + 4,
      angle: (Math.PI / 6) + Math.random() * (Math.PI / 8),
      alpha: 1,
      decay: Math.random() * 0.015 + 0.01,
    });

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Twinkling stars
      for (const s of stars) {
        s.alpha += s.speed;
        s.x += s.drift;
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;

        const twinkle = Math.sin(s.alpha) * 0.5 + 0.5;
        const brightness = 200 + Math.floor(twinkle * 55);
        ctx.fillStyle = `rgba(${brightness},${brightness},255,${twinkle * 0.8 + 0.1})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * (0.7 + twinkle * 0.3), 0, Math.PI * 2);
        ctx.fill();
      }

      // Shooting stars
      if (Math.random() < 0.003 && shooters.length < 2) {
        shooters.push(spawnShooter());
      }

      for (let i = shooters.length - 1; i >= 0; i--) {
        const sh = shooters[i];
        const dx = Math.cos(sh.angle) * sh.speed;
        const dy = Math.sin(sh.angle) * sh.speed;
        sh.x += dx;
        sh.y += dy;
        sh.alpha -= sh.decay;

        if (sh.alpha <= 0) {
          shooters.splice(i, 1);
          continue;
        }

        const tailX = sh.x - Math.cos(sh.angle) * sh.len;
        const tailY = sh.y - Math.sin(sh.angle) * sh.len;

        const grad = ctx.createLinearGradient(tailX, tailY, sh.x, sh.y);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(1, `rgba(200,220,255,${sh.alpha})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(sh.x, sh.y);
        ctx.stroke();

        // Head glow
        ctx.fillStyle = `rgba(220,240,255,${sh.alpha})`;
        ctx.beginPath();
        ctx.arc(sh.x, sh.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
