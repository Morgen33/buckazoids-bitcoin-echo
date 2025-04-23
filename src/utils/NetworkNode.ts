
export class NetworkNode {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  connections: NetworkNode[];
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
  
  update(canvasWidth: number, canvasHeight: number) {
    // Move slightly
    this.x += this.vx;
    this.y += this.vy;
    
    // Bounce off the edges
    if (this.x <= this.radius || this.x >= canvasWidth - this.radius) {
      this.vx *= -1;
    }
    
    if (this.y <= this.radius || this.y >= canvasHeight - this.radius) {
      this.vy *= -1;
    }
    
    // Update pulse
    this.pulsePhase += this.pulseSpeed;
    if (this.pulsePhase > Math.PI * 2) {
      this.pulsePhase = 0;
    }
  }
  
  draw(ctx: CanvasRenderingContext2D) {
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
