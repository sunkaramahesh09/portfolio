import { useEffect, useRef } from "react";

interface Petal {
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
}

export const SakuraCanvas = () => {
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

    // Mouse wind interaction
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetWind = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      targetWind = ((mouseX / width) - 0.5) * 1.5;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const colors = [
      "rgba(255, 183, 197, ", // soft sakura
      "rgba(255, 192, 203, ", // pink
      "rgba(255, 140, 170, ", // vibrant blossom
      "rgba(250, 218, 221, ", // pale blush
    ];

    const numPetals = 35;
    const petals: Petal[] = Array.from({ length: numPetals }, () => ({
      x: Math.random() * (width + 200),
      y: Math.random() * height,
      size: Math.random() * 5 + 4,
      speedX: -(Math.random() * 1.2 + 0.6), // drift left matching the car & birds
      speedY: Math.random() * 1.0 + 0.6,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 1.5,
      flip: Math.random() * Math.PI,
      flipSpeed: Math.random() * 0.03 + 0.01,
      alpha: Math.random() * 0.5 + 0.35,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let currentWind = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      currentWind += (targetWind - currentWind) * 0.05;

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        p.x += p.speedX + currentWind;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;
        p.flip += p.flipSpeed;

        // Wrap around seamlessly
        if (p.x < -40) p.x = width + 40;
        if (p.y > height + 40) {
          p.y = -20;
          p.x = Math.random() * (width + 100);
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.scale(1, Math.sin(p.flip));

        // Draw elegant curved cherry blossom petal
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-p.size / 2, -p.size, -p.size, p.size / 2, 0, p.size * 1.6);
        ctx.bezierCurveTo(p.size, p.size / 2, p.size / 2, -p.size, 0, 0);

        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = "rgba(255, 140, 180, 0.4)";
        ctx.shadowBlur = 4;
        ctx.fill();

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
