import { useEffect, useRef } from 'react';

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const drawAurora = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient1.addColorStop(0, 'rgba(108, 99, 255, 0.15)');
      gradient1.addColorStop(0.5, 'rgba(0, 212, 170, 0.08)');
      gradient1.addColorStop(1, 'rgba(108, 99, 255, 0.12)');

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const yOffset = canvas.height * 0.3 + Math.sin(time + i * 1.5) * 80;
        const xSpread = canvas.width * 0.8;

        ctx.moveTo(canvas.width * 0.1, yOffset);

        for (let x = 0; x <= xSpread; x += 5) {
          const progress = x / xSpread;
          const y =
            yOffset +
            Math.sin(progress * Math.PI * 2 + time * 2 + i) * 60 +
            Math.sin(progress * Math.PI * 4 + time * 1.5 + i * 0.5) * 30 +
            Math.cos(progress * Math.PI * 3 + time + i * 2) * 20;
          ctx.lineTo(canvas.width * 0.1 + x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        const alpha = 0.04 + Math.sin(time + i) * 0.02;
        ctx.fillStyle = i === 0
          ? `rgba(108, 99, 255, ${alpha})`
          : i === 1
          ? `rgba(0, 212, 170, ${alpha * 0.7})`
          : `rgba(168, 85, 247, ${alpha * 0.5})`;
        ctx.fill();
      }

      // Subtle glow orbs
      for (let i = 0; i < 4; i++) {
        const x = canvas.width * (0.2 + i * 0.2) + Math.sin(time * 0.5 + i) * 100;
        const y = canvas.height * 0.4 + Math.cos(time * 0.3 + i * 2) * 60;
        const radius = 150 + Math.sin(time + i) * 50;

        const glow = ctx.createRadialGradient(x, y, 0, x, y, radius);
        glow.addColorStop(0, `rgba(108, 99, 255, ${0.03 + Math.sin(time + i) * 0.01})`);
        glow.addColorStop(1, 'rgba(108, 99, 255, 0)');

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }

      animationId = requestAnimationFrame(drawAurora);
    };
    drawAurora();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-80"
    />
  );
}
