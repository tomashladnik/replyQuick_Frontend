"use client"
import { useEffect, useState } from "react";

interface DotProps {
  x: number;
  y: number;
  cursor: { x: number; y: number } | null;
}

const Dot = ({ x, y, cursor }: DotProps) => {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (!cursor) return;
    const dx = cursor.x - x;
    const dy = cursor.y - y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    setDistance(dist);
  }, [cursor, x, y]);

  // Translate and scale based on cursor distance for interactive animation
  const translateY = distance < 100 ? -15 + distance / 10 : 0;
  const scale = distance < 100 ? 1.6 - distance / 120 : 1;

  return (
    <div
      className="w-0.5 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full shadow-lg transition-all duration-300"
      style={{
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: distance < 100 ? 1 : 0.6, // Add a fade effect for distant dots
      }}
    />
  );
};

export default function DottedBackground({ children }: { children: React.ReactNode }) {
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const dots: { x: number; y: number; id: string }[] = [];
  const rows = 24;
  const cols = 50;
  const spacing = 32;

  // Generate dot positions
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      dots.push({ x: x * spacing, y: y * spacing, id: `${x}-${y}` });
    }
  }
  // Handle mouse movement to track cursor
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <section
      className="relative w-full h-[700px] overflow-hidden "
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${spacing}px)`,
          gridTemplateRows: `repeat(${rows}, ${spacing}px)`,
        }}
      >
        {dots.map((dot) => (
          <Dot key={dot.id} x={dot.x} y={dot.y} cursor={cursor} />
        ))}
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}