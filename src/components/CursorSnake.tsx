import { useEffect, useRef } from "react";

// Number of body segments and the fixed gap kept between each of them.
const SEGMENT_COUNT = 14;
const SEGMENT_SPACING = 6;

export default function CursorSnake() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Skip on touch devices — there's no hover cursor to follow.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: width / 2, y: height / 2 };
    let hasMoved = false;

    const handleMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      hasMoved = true;
    };
    window.addEventListener("mousemove", handleMove);

    // Every segment starts stacked on the initial mouse position.
    const segments = Array.from({ length: SEGMENT_COUNT }, () => ({
      x: mouse.x,
      y: mouse.y,
    }));

    let rafId: number;

    const render = () => {
      if (!hasMoved) {
        rafId = requestAnimationFrame(render);
        return;
      }

      // Head eases toward the real cursor position.
      segments[0].x += (mouse.x - segments[0].x) * 0.35;
      segments[0].y += (mouse.y - segments[0].y) * 0.35;

      // Each following segment keeps a fixed distance from the one
      // ahead of it, like links in a chain — this is what produces
      // the bending, slithering body as the head changes direction.
      for (let i = 1; i < segments.length; i++) {
        const prev = segments[i - 1];
        const curr = segments[i];
        const dx = prev.x - curr.x;
        const dy = prev.y - curr.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const excess = dist - SEGMENT_SPACING;
        const angle = Math.atan2(dy, dx);
        curr.x += Math.cos(angle) * excess * 0.6;
        curr.y += Math.sin(angle) * excess * 0.6;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw tail-to-head so the head circle overlaps the body.
      for (let i = segments.length - 1; i >= 0; i--) {
        const t = i / (segments.length - 1); // 0 = head, 1 = tail
        const radius = 5 * (1 - t) + 1 * t;
        const seg = segments[i];

        // Very light, soft bluish-green from head to tail.
        const r = Math.round(150 + (190 - 150) * (1 - t));
        const g = Math.round(220 + (235 - 220) * (1 - t));
        const b = Math.round(210 + (225 - 210) * (1 - t));

        ctx.beginPath();
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.5 - t * 0.3})`;
        ctx.arc(seg.x, seg.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Small white eyes on the head so it reads as a snake, not a blob.
      const head = segments[0];
      const next = segments[1] ?? head;
      const dirX = head.x - next.x;
      const dirY = head.y - next.y;
      const len = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
      const perpX = (-dirY / len) * 1.8;
      const perpY = (dirX / len) * 1.8;

      ctx.beginPath();
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      ctx.arc(head.x + perpX, head.y + perpY, 0.9, 0, Math.PI * 2);
      ctx.arc(head.x - perpX, head.y - perpY, 0.9, 0, Math.PI * 2);
      ctx.fill();

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
