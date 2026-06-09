'use client';

import { useEffect, useRef } from 'react';

// Quantum / neural-network inspired animated particle field.
// Particles drift slowly, connect when close, and gently react to the cursor.
export default function ParticleField({ density = 0.00012, className = '' }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let particles = [];
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setup = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const count = Math.max(40, Math.floor(width * height * density));
      particles = new Array(count).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4,
        hue: 210 + Math.random() * 60, // blue → indigo → violet
      }));
    };

    const onResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      setup();
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // soft radial backdrop
      const grd = ctx.createRadialGradient(width * 0.5, height * 0.4, 0, width * 0.5, height * 0.4, Math.max(width, height) * 0.7);
      grd.addColorStop(0, 'rgba(56, 89, 220, 0.10)');
      grd.addColorStop(1, 'rgba(2, 6, 23, 0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // mouse influence
        const dxm = p.x - mx;
        const dym = p.y - my;
        const dm2 = dxm * dxm + dym * dym;
        if (dm2 < 140 * 140) {
          const f = (140 - Math.sqrt(dm2)) / 140;
          p.vx += (dxm / Math.sqrt(dm2 + 0.01)) * f * 0.04;
          p.vy += (dym / Math.sqrt(dm2 + 0.01)) * f * 0.04;
        }
        // damping
        p.vx *= 0.995;
        p.vy *= 0.995;

        // dot
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, 0.9)`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // connecting lines
      const maxDist = 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < maxDist * maxDist) {
            const alpha = 1 - Math.sqrt(d2) / maxDist;
            ctx.strokeStyle = `hsla(220, 100%, 70%, ${alpha * 0.25})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    setup();
    draw();
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
      style={{ display: 'block' }}
    />
  );
}
