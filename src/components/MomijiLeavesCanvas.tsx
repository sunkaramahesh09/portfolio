import { useEffect, useRef } from "react";

interface Leaf {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotSpeed: number;
  flip: number;
  flipSpeed: number;
  alpha: number;
  color: string;
  swayAmp: number;
  swayFreq: number;
  phase: number;
}

export const MomijiLeavesCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Interactive mouse wind
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetWind = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      targetWind = ((mouseX / width) - 0.5) * 2.0;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Japanese Autumn Momiji Maple Colors
    const colors = [
      "rgba(220, 20, 60, ",   // Crimson
      "rgba(217, 4, 41, ",    // Vibrant Scarlet
      "rgba(168, 16, 42, ",   // Deep Japanese Burgundy
      "rgba(242, 60, 75, ",   // Bright Maple Red
      "rgba(195, 30, 55, ",   // Rich Ruby
    ];

    const numLeaves = 36;
    const leaves: Leaf[] = Array.from({ length: numLeaves }, () => ({
      x: Math.random() * (width + 200),
      y: Math.random() * height,
      size: Math.random() * 6 + 5,
      speedX: -(Math.random() * 1.4 + 0.6), // drift left towards samurai
      speedY: Math.random() * 1.2 + 0.8,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 2.0,
      flip: Math.random() * Math.PI,
      flipSpeed: Math.random() * 0.04 + 0.02,
      alpha: Math.random() * 0.45 + 0.45,
      color: colors[Math.floor(Math.random() * colors.length)],
      swayAmp: Math.random() * 20 + 10,
      swayFreq: Math.random() * 0.03 + 0.015,
      phase: Math.random() * Math.PI * 2,
    }));

    let currentWind = 0;
    let frame = 0;

    // Helper: draw stylized Japanese 5-pointed maple leaf
    const drawMapleLeaf = (size: number) => {
      ctx.beginPath();
      // Center tip
      ctx.moveTo(0, -size * 1.3);
      ctx.quadraticCurveTo(size * 0.35, -size * 0.6, size * 0.9, -size * 0.7);
      // Right upper lobe
      ctx.quadraticCurveTo(size * 0.6, -size * 0.2, size * 1.1, size * 0.1);
      // Right lower lobe
      ctx.quadraticCurveTo(size * 0.5, size * 0.3, size * 0.6, size * 0.7);
      // Base to stem
      ctx.quadraticCurveTo(size * 0.2, size * 0.5, 0, size * 0.9);
      // Stem
      ctx.lineTo(0, size * 1.3);
      ctx.lineTo(0, size * 0.9);
      // Left lower lobe
      ctx.quadraticCurveTo(-size * 0.2, size * 0.5, -size * 0.6, size * 0.7);
      // Left upper lobe
      ctx.quadraticCurveTo(-size * 0.5, size * 0.3, -size * 1.1, size * 0.1);
      // Left tip
      ctx.quadraticCurveTo(-size * 0.6, -size * 0.2, -size * 0.9, -size * 0.7);
      ctx.quadraticCurveTo(-size * 0.35, -size * 0.6, 0, -size * 1.3);
      ctx.closePath();
      ctx.fill();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;

      currentWind += (targetWind - currentWind) * 0.05;

      for (let i = 0; i < leaves.length; i++) {
        const l = leaves[i];

        const sway = Math.sin(frame * l.swayFreq + l.phase) * 1.2;
        l.x += l.speedX + currentWind + sway;
        l.y += l.speedY;
        l.rotation += l.rotSpeed;
        l.flip += l.flipSpeed;

        // Wrap around smoothly
        if (l.x < -60) l.x = width + 60;
        if (l.y > height + 60) {
          l.y = -30;
          l.x = Math.random() * (width + 100);
        }

        ctx.save();
        ctx.translate(l.x, l.y);
        ctx.rotate((l.rotation * Math.PI) / 180);
        ctx.scale(1, Math.sin(l.flip));

        ctx.fillStyle = `${l.color}${l.alpha})`;
        ctx.shadowColor = "rgba(220, 20, 60, 0.4)";
        ctx.shadowBlur = 6;

        drawMapleLeaf(l.size);

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
};
