
import { useRef, useEffect } from 'react';

interface Node {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  id: number;
}

export const useNetworkAnimation = () => {
  const containerRef = useRef<SVGSVGElement | null>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Create nodes and lines container elements
    const nodesGroup = container.querySelector('.network-nodes');
    const linesGroup = container.querySelector('.network-lines');
    if (!nodesGroup || !linesGroup) return;
    
    // Parameters
    const nodeCount = 12;
    const viewBoxWidth = 1200;
    const viewBoxHeight = 200;
    const maxDistance = 150;
    
    // Create nodes
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      // Distribute nodes along the mountain silhouette
      const x = Math.random() * viewBoxWidth;
      // Position nodes near the mountain peaks (y between 40-140)
      const y = 40 + Math.random() * 80;
      const size = 3 + Math.random() * 3;
      const speedX = (Math.random() - 0.5) * 0.5;
      const speedY = (Math.random() - 0.5) * 0.5;
      
      nodes.push({ x, y, size, speedX, speedY, id: i });
      
      // Create SVG circle for each node
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x.toString());
      circle.setAttribute('cy', y.toString());
      circle.setAttribute('r', size.toString());
      circle.setAttribute('fill', '#f7931a'); // Buckazoid orange color
      circle.setAttribute('opacity', '0.8');
      circle.setAttribute('data-node-id', i.toString());
      nodesGroup.appendChild(circle);
    }
    
    // Animation function
    let animationFrameId: number;
    const animate = () => {
      // Update node positions
      nodes.forEach((node) => {
        node.x += node.speedX;
        node.y += node.speedY;
        
        // Bounce off edges
        if (node.x <= 0 || node.x >= viewBoxWidth) {
          node.speedX *= -1;
        }
        if (node.y <= 40 || node.y >= 140) {
          node.speedY *= -1;
        }
        
        // Update circle position
        const circle = nodesGroup.querySelector(`circle[data-node-id="${node.id}"]`) as SVGCircleElement;
        if (circle) {
          circle.setAttribute('cx', node.x.toString());
          circle.setAttribute('cy', node.y.toString());
        }
      });
      
      // Clear existing lines
      while (linesGroup.firstChild) {
        linesGroup.removeChild(linesGroup.firstChild);
      }
      
      // Draw lines between nodes that are close to each other
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.5;
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', nodes[i].x.toString());
            line.setAttribute('y1', nodes[i].y.toString());
            line.setAttribute('x2', nodes[j].x.toString());
            line.setAttribute('y2', nodes[j].y.toString());
            line.setAttribute('stroke', '#ffffff');
            line.setAttribute('stroke-width', '0.5');
            line.setAttribute('opacity', opacity.toString());
            linesGroup.appendChild(line);
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return containerRef;
};
