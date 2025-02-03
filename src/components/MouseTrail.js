import React, { useEffect, useRef } from "react";

const MouseTrail = () => {
  const canvasRef = useRef(null);
  const particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    const createParticle = (x, y) => {
      particles.push({
        x,
        y,
        size: Math.random() * 8 + 2, 
        opacity: 0.7,
        life: 190, 
        dx: (Math.random() - 0.9) * 2, 
        dy: (Math.random() - 0.5) * 2,
      });
    };


    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(23, 78, 101, ${p.opacity})`;
        ctx.shadowColor = "rgba(36, 73, 88, 0.22)"; // Тень
        ctx.shadowBlur = 10;
        ctx.fill();


        p.x += p.dx;
        p.y += p.dy;
        p.opacity -= 0.01;
        p.size *= 0.9;


        if (p.opacity <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(drawParticles);
    };


    const handleMouseMove = (e) => {
      for (let i = 0; i < 5; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    drawParticles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default MouseTrail;