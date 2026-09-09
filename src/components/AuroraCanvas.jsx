import { useEffect, useRef } from 'react';

// Aurora-like color palette (HSL hue values)
const AURORA_HUES = [200, 160, 270, 320, 180, 220, 140, 290];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function pickRandomHue() {
  return AURORA_HUES[Math.floor(Math.random() * AURORA_HUES.length)];
}

class AuroraOrb {
  constructor(canvas) {
    this.canvas = canvas;
    this.radius = randomBetween(150, 350);
    this.x = randomBetween(0, canvas.width);
    this.y = randomBetween(0, canvas.height);

    // Movement
    this.vx = randomBetween(-0.3, 0.3);
    this.vy = randomBetween(-0.3, 0.3);
    this.targetVx = this.vx;
    this.targetVy = this.vy;
    this.dirChangeTimer = randomBetween(200, 500);

    // Color
    this.hue = pickRandomHue();
    this.targetHue = pickRandomHue();
    this.saturation = randomBetween(60, 90);
    this.lightness = randomBetween(50, 65);
    this.alpha = randomBetween(0.08, 0.18);
    this.colorTimer = randomBetween(300, 600);
  }

  update() {
    // Drift toward target velocity
    this.vx = lerp(this.vx, this.targetVx, 0.005);
    this.vy = lerp(this.vy, this.targetVy, 0.005);

    this.x += this.vx;
    this.y += this.vy;

    // Wrap around edges with padding
    const pad = this.radius;
    if (this.x < -pad) this.x = this.canvas.width + pad;
    if (this.x > this.canvas.width + pad) this.x = -pad;
    if (this.y < -pad) this.y = this.canvas.height + pad;
    if (this.y > this.canvas.height + pad) this.y = -pad;

    // Periodically pick a new random direction
    this.dirChangeTimer--;
    if (this.dirChangeTimer <= 0) {
      this.targetVx = randomBetween(-0.4, 0.4);
      this.targetVy = randomBetween(-0.4, 0.4);
      this.dirChangeTimer = randomBetween(300, 700);
    }

    // Gradually shift color
    this.hue = lerp(this.hue, this.targetHue, 0.003);
    this.colorTimer--;
    if (this.colorTimer <= 0) {
      this.targetHue = pickRandomHue();
      this.alpha = randomBetween(0.08, 0.18);
      this.colorTimer = randomBetween(400, 800);
    }
  }

  draw(ctx) {
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.radius
    );
    const h = Math.round(this.hue);
    gradient.addColorStop(0, `hsla(${h}, ${this.saturation}%, ${this.lightness}%, ${this.alpha})`);
    gradient.addColorStop(0.5, `hsla(${h}, ${this.saturation}%, ${this.lightness}%, ${this.alpha * 0.4})`);
    gradient.addColorStop(1, `hsla(${h}, ${this.saturation}%, ${this.lightness}%, 0)`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function AuroraCanvas({ count = 6 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create orbs
    const orbs = [];
    for (let i = 0; i < count; i++) {
      orbs.push(new AuroraOrb(canvas));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Use lighter composite for aurora glow blending
      ctx.globalCompositeOperation = 'lighter';

      for (const orb of orbs) {
        orb.update();
        orb.draw(ctx);
      }

      ctx.globalCompositeOperation = 'source-over';
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -2,
        pointerEvents: 'none',
      }}
    />
  );
}
