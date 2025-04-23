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
    
    // Create nodes container element
    const nodesGroup = container.querySelector('.network-nodes');
    if (!nodesGroup) return;
    
    // Parameters
    const nodeCount = 12;
    const viewBoxWidth = 1200;
    const viewBoxHeight = 200;
    
    // Create nodes
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      // Distribute nodes along the mountain silhouette, staying within peaks
      const x = Math.random() * viewBoxWidth;
      // Position nodes near the mountain peaks (y between 50-120 to stay visible)
      const y = 50 + Math.random() * 70;
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
        // Keep nodes within the mountain peaks area
        if (node.y <= 50 || node.y >= 120) {
          node.speedY *= -1;
        }
        
        // Update circle position
        const circle = nodesGroup.querySelector(`circle[data-node-id="${node.id}"]`) as SVGCircleElement;
        if (circle) {
          circle.setAttribute('cx', node.x.toString());
          circle.setAttribute('cy', node.y.toString());
        }
      });
      
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
