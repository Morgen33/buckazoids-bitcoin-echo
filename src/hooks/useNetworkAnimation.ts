
import { useEffect, useRef } from 'react';
import { NetworkNode } from '@/utils/NetworkNode';

export const useNetworkAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };
    
    // Initial resize
    resizeCanvas();
    
    // Create nodes
    const createNodes = () => {
      const nodes: NetworkNode[] = [];
      const nodeCount = Math.floor((canvas.width * canvas.height) / 25000);
      
      // Create nodes
      for (let i = 0; i < nodeCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = 2 + Math.random() * 2;
        // Occasionally make an orange node
        const color = Math.random() < 0.15 ? "#F77F00" : "rgba(255, 255, 255, 0.5)";
        nodes.push(new NetworkNode(x, y, radius, color));
      }
      
      // Create connections
      nodes.forEach(node => {
        // Connect to 2-4 nearest nodes
        const connectionCount = 2 + Math.floor(Math.random() * 3);
        const possibleConnections = [...nodes].filter(n => n !== node);
        possibleConnections.sort((a, b) => {
          const distA = Math.hypot(a.x - node.x, a.y - node.y);
          const distB = Math.hypot(b.x - node.x, b.y - node.y);
          return distA - distB;
        });
        
        node.connections = possibleConnections.slice(0, connectionCount);
      });
      
      return nodes;
    };
    
    let nodes = createNodes();
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas with dark background
      ctx.fillStyle = "rgba(24, 30, 32, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.forEach(node => {
        node.update(canvas.width, canvas.height);
        node.draw(ctx);
      });
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Update nodes on resize
    const handleResize = () => {
      resizeCanvas();
      nodes = createNodes();
    };
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", resizeCanvas);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return canvasRef;
};
