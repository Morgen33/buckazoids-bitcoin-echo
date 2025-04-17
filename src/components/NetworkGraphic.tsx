
import React, { useEffect, useRef } from "react";

const NetworkGraphic = () => {
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
    
    // Resize on window resize
    window.addEventListener("resize", resizeCanvas);
    
    // Node class for creating the network points
    class Node {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      connections: Node[];
      pulsePhase: number;
      pulseSpeed: number;
      
      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.connections = [];
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
      }
      
      update() {
        // Move slightly
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off the edges
        if (this.x <= this.radius || this.x >= canvas.width - this.radius) {
          this.vx *= -1;
        }
        
        if (this.y <= this.radius || this.y >= canvas.height - this.radius) {
          this.vy *= -1;
        }
        
        // Update pulse
        this.pulsePhase += this.pulseSpeed;
        if (this.pulsePhase > Math.PI * 2) {
          this.pulsePhase = 0;
        }
      }
      
      draw() {
        if (!ctx) return;
        
        // Draw connections first
        ctx.lineWidth = 0.5;
        this.connections.forEach(node => {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(node.x, node.y);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
          ctx.stroke();
        });
        
        // Draw node with pulse effect
        const pulseScale = 1 + 0.2 * Math.sin(this.pulsePhase);
        
        // Draw glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 2 * pulseScale
        );
        gradient.addColorStop(0, this.color === "#F77F00" ? "rgba(247, 127, 0, 0.3)" : "rgba(255, 255, 255, 0.1)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2 * pulseScale, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw the actual node
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * pulseScale, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Create nodes
    const createNodes = () => {
      const nodes: Node[] = [];
      const nodeCount = Math.floor((canvas.width * canvas.height) / 25000);
      
      // Create nodes
      for (let i = 0; i < nodeCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = 2 + Math.random() * 2;
        // Occasionally make an orange node
        const color = Math.random() < 0.15 ? "#F77F00" : "rgba(255, 255, 255, 0.5)";
        nodes.push(new Node(x, y, radius, color));
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
    
    // Create jagged mountain silhouette
    const createMountainPath = () => {
      const points: { x: number; y: number }[] = [];
      const segmentCount = 20;
      const segmentWidth = canvas.width / segmentCount;
      
      // Start at bottom left
      points.push({ x: 0, y: canvas.height });
      
      // Create jagged mountain points
      for (let i = 0; i <= segmentCount; i++) {
        const x = i * segmentWidth;
        // Random height with a trend - higher in the middle, lower at edges
        const heightFactor = 1 - Math.abs((i / segmentCount) - 0.5) * 2;
        const minHeight = canvas.height * 0.5;
        const maxVariation = canvas.height * 0.2;
        const y = minHeight - (heightFactor * maxVariation) - (Math.random() * canvas.height * 0.1);
        points.push({ x, y });
      }
      
      // End at bottom right
      points.push({ x: canvas.width, y: canvas.height });
      
      return points;
    };
    
    const mountainPoints = createMountainPath();
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas with dark background
      ctx.fillStyle = "rgba(24, 30, 32, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw mountain silhouette
      ctx.fillStyle = "rgba(30, 36, 38, 0.9)";
      ctx.beginPath();
      mountainPoints.forEach((point, i) => {
        if (i === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });
      ctx.closePath();
      ctx.fill();
      
      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
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
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.8 }}
    />
  );
};

export default NetworkGraphic;
