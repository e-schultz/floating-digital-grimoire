
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SacredGeometryProps {
  className?: string;
  density?: number;
  animate?: boolean;
}

const SacredGeometry: React.FC<SacredGeometryProps> = ({
  className,
  density = 20,
  animate = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    let animationFrameId: number;
    let t = 0;
    
    const draw = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set up drawing styles
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(159, 158, 161, 0.3)';
      
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      // Draw grid
      const gridSize = width / density;
      
      // Draw vertical lines
      for (let x = 0; x <= density; x++) {
        const xPos = x * gridSize;
        ctx.beginPath();
        ctx.moveTo(xPos, 0);
        
        if (animate) {
          // Add wave effect to vertical lines
          for (let y = 0; y < height; y += 5) {
            const wave = Math.sin(y * 0.01 + t * 0.02 + x * 0.2) * 5;
            ctx.lineTo(xPos + wave, y);
          }
        } else {
          ctx.lineTo(xPos, height);
        }
        
        ctx.stroke();
      }
      
      // Draw horizontal lines
      for (let y = 0; y <= density; y++) {
        const yPos = y * gridSize;
        ctx.beginPath();
        ctx.moveTo(0, yPos);
        
        if (animate) {
          // Add wave effect to horizontal lines
          for (let x = 0; x < width; x += 5) {
            const wave = Math.sin(x * 0.01 + t * 0.02 + y * 0.2) * 5;
            ctx.lineTo(x, yPos + wave);
          }
        } else {
          ctx.lineTo(width, yPos);
        }
        
        ctx.stroke();
      }
      
      // Draw sacred circles
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
      
      // Central circle
      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.min(width, height) * 0.4;
      
      // Draw concentric circles
      for (let i = 1; i <= 5; i++) {
        const radius = (maxRadius / 5) * i;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Draw "corridor of light" effect
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, maxRadius
      );
      
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
      gradient.addColorStop(0.7, 'rgba(139, 92, 246, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, maxRadius, 0, Math.PI * 2);
      ctx.fill();
      
      if (animate) {
        t += 0.05;
        animationFrameId = requestAnimationFrame(draw);
      }
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [density, animate]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={cn(
        'absolute inset-0 w-full h-full opacity-40 mix-blend-screen pointer-events-none',
        className
      )}
    />
  );
};

export default SacredGeometry;
