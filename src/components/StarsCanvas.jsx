import { useEffect, useRef } from 'react';

export default function StarsCanvas({ count = 180 }) {
  const canvasRef = useRef(null);
  // Shared turbulence level: 0 = calm, 1 = full chaos — decays over time
  const turbulenceRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animId;

    // Each star gets a base drift + a turbulence velocity (vx/vy)
    const stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.3,
      alpha: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.008 + 0.003,
      // Base calm drift
      drift: (Math.random() - 0.5) * 0.15,
      // Turbulence velocity — kicked randomly on scroll
      vx: 0,
      vy: 0,
      // Each star has its own random turbulence direction multiplier
      turbDir: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      },
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

      const turb = turbulenceRef.current;

      // Twinkling stars
      for (const s of stars) {
        s.alpha += s.speed;

        // Turbulence: each star moves in its own random direction, scaled by global turbulence level
        s.vx += s.turbDir.x * turb * 0.08;
        s.vy += s.turbDir.y * turb * 0.08;

        // Dampen turbulence velocity so stars settle back
        s.vx *= 0.92;
        s.vy *= 0.92;

        // Apply movement: base drift + turbulence kick
        s.x += s.drift + s.vx;
        s.y += s.vy;

        // Wrap around all edges
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        const twinkle = Math.sin(s.alpha) * 0.5 + 0.5;
        // Stars glow slightly brighter during turbulence
        const glow = 1 + turb * 0.4;
        const brightness = 200 + Math.floor(twinkle * 55);
        ctx.fillStyle = `rgba(${brightness},${brightness},255,${Math.min(1, (twinkle * 0.8 + 0.1) * glow)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * (0.7 + twinkle * 0.3), 0, Math.PI * 2);
        ctx.fill();
      }

      // Decay global turbulence toward 0 each frame
      turbulenceRef.current = Math.max(0, turb - 0.018);

      // Shooting stars — spawn more frequently during turbulence
      const shootChance = 0.003 + turb * 0.012;
      if (Math.random() < shootChance && shooters.length < 3) {
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

        ctx.fillStyle = `rgba(220,240,255,${sh.alpha})`;
        ctx.beginPath();
        ctx.arc(sh.x, sh.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(animate);
    }

    animate();

    // Scroll turbulence — boost turbulence level on each scroll event
    const onScroll = () => {
      // Each scroll event adds a jolt; caps at 1.0
      turbulenceRef.current = Math.min(1, turbulenceRef.current + 0.25);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
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
