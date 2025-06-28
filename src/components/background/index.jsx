import React, { useRef, useEffect, useState } from "react";

const BackgroundEffect = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [hovering, setHovering] = useState(false);
  const dots = useRef([]);

  const numDots = 2000;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    dots.current = Array.from({ length: numDots }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * (canvas.width / 2);
      return {
        angle,
        radius,
        speed: 0.002 + Math.random() * 0.003,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = hovering ? mousePos.x : canvas.width / 2;
      const cy = hovering ? mousePos.y : canvas.height / 2;

      for (let dot of dots.current) {
        dot.angle += dot.speed;
        dot.radius -= 0.05;
        if (dot.radius < 10) dot.radius = canvas.width / 2;

        const x = cx + dot.radius * Math.cos(dot.angle);
        const y = cy + dot.radius * Math.sin(dot.angle);

        ctx.beginPath();
        ctx.arc(x, y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [hovering, mousePos]);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-black overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Static grid of small dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(40)].map((_, row) =>
          [...Array(60)].map((_, col) => (
            <div
              key={`${row}-${col}`}
              className="absolute w-[1.2px] h-[1.2px] bg-white opacity-[0.08]"
              style={{
                left: `${col * 2}vw`,
                top: `${row * 2.5}vh`,
              }}
            />
          ))
        )}
      </div>

      {/* Radial gradient glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Swirling canvas dots */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
      />
    </div>
  );
};

export default BackgroundEffect;
