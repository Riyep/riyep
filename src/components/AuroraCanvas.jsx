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

    // Base movement
    this.vx = randomBetween(-0.3, 0.3);
    this.vy = randomBetween(-0.3, 0.3);
    this.targetVx = this.vx;
    this.targetVy = this.vy;
    this.dirChangeTimer = randomBetween(200, 500);

    // Turbulence kick velocity (set on scroll, decays to 0)
    this.kickVx = 0;
    this.kickVy = 0;
    // Each orb has its own random turbulence direction
    this.kickDirX = (Math.random() - 0.5) * 2;
    this.kickDirY = (Math.random() - 0.5) * 2;

    // Color
    this.hue = pickRandomHue();
    this.targetHue = pickRandomHue();
    this.saturation = randomBetween(60, 90);
    this.lightness = randomBetween(50, 65);
    this.alpha = randomBetween(0.08, 0.18);
    this.colorTimer = randomBetween(300, 600);
  }

  // Called each frame with current global turbulence level (0–1)
  update(turbulence) {
    // Add turbulence kick this frame
    this.kickVx += this.kickDirX * turbulence * 0.18;
    this.kickVy += this.kickDirY * turbulence * 0.18;

    // Dampen kick so orbs settle
    this.kickVx *= 0.94;
    this.kickVy *= 0.94;

    // Drift toward target velocity (base movement)
    this.vx = lerp(this.vx, this.targetVx, 0.005);
    this.vy = lerp(this.vy, this.targetVy, 0.005);

    // Total movement = base drift + turbulence kick
    this.x += this.vx + this.kickVx;
    this.y += this.vy + this.kickVy;

    // Wrap around edges with padding
    const pad = this.radius;
    if (this.x < -pad) this.x = this.canvas.width + pad;
    if (this.x > this.canvas.width + pad) this.x = -pad;
    if (this.y < -pad) this.y = this.canvas.height + pad;
    if (this.y > this.canvas.height + pad) this.y = -pad;

    // Periodically pick a new random base direction
    this.dirChangeTimer--;
    if (this.dirChangeTimer <= 0) {
      // During turbulence, pick more energetic directions
      const speed = 0.4 + turbulence * 0.5;
      this.targetVx = randomBetween(-speed, speed);
      this.targetVy = randomBetween(-speed, speed);
      this.dirChangeTimer = randomBetween(300, 700);
    }

    // Gradually shift color — faster during turbulence
    const colorShift = 0.003 + turbulence * 0.006;
    this.hue = lerp(this.hue, this.targetHue, colorShift);
    this.colorTimer--;
    if (this.colorTimer <= 0) {
      this.targetHue = pickRandomHue();
      // Slightly more vivid during turbulence
      this.alpha = randomBetween(0.08, 0.18 + turbulence * 0.06);
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
  const turbulenceRef = useRef(0);

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
      ctx.globalCompositeOperation = 'lighter';

      const turb = turbulenceRef.current;

      for (const orb of orbs) {
        orb.update(turb);
        orb.draw(ctx);
      }

      ctx.globalCompositeOperation = 'source-over';

      // Decay global turbulence — aurora calms slower than stars (more fluid feel)
      turbulenceRef.current = Math.max(0, turb - 0.012);

      animId = requestAnimationFrame(animate);
    };

    animate();

    // Scroll turbulence — boost on each scroll event
    const onScroll = () => {
      turbulenceRef.current = Math.min(1, turbulenceRef.current + 0.3);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
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
