import React, { useEffect, useState } from 'react';

const CursorGradient: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Main bright gradient */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(139, 92, 246, 0.4), 
            rgba(59, 130, 246, 0.3), 
            rgba(236, 72, 153, 0.2), 
            rgba(34, 197, 94, 0.1), 
            transparent 60%)`,
        }}
      />
      
      {/* Inner bright core */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-200"
        style={{
          background: `radial-gradient(150px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(255, 255, 255, 0.1), 
            rgba(139, 92, 246, 0.6), 
            rgba(59, 130, 246, 0.4), 
            transparent 70%)`,
        }}
      />
      
      {/* Outer glow effect */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(139, 92, 246, 0.15), 
            rgba(59, 130, 246, 0.1), 
            rgba(236, 72, 153, 0.08), 
            rgba(34, 197, 94, 0.05), 
            transparent 80%)`,
        }}
      />
    </>
  );
};

export default CursorGradient;