
import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
  fontSize?: number;
  color?: string;
  characters?: string;
  fadeOpacity?: number;
  speed?: number; // New prop for controlling speed
}

const MatrixRain: React.FC<MatrixRainProps> = ({
  fontSize = 20,
  color = '#00ff00',
  characters = '01',
  fadeOpacity = 0.1,
  speed = 1 // Default speed multiplier
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = characters.split('');
    const drops: number[] = [];
    const columnCount = Math.floor(canvas.width / fontSize);
    
    // Track which letter of "BUCKAZOIDS" each column is displaying
    const word = "BUCKAZOIDS";
    const letterIndices: number[] = [];

    for (let i = 0; i < columnCount; i++) {
      drops[i] = Math.random() * -100;
      // Start each column at a random position in the word
      letterIndices[i] = Math.floor(Math.random() * word.length);
    }

    const draw = () => {
      ctx.fillStyle = `rgba(3, 28, 43, ${fadeOpacity})`; // Changed to #031c2b (darker blue)
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Determine whether to use the next letter in "BUCKAZOIDS" or a random character
        let char;
        if (Math.random() > 0.3) { // 70% chance to use the word
          char = word[letterIndices[i]];
          // Move to the next letter in the word for this column
          letterIndices[i] = (letterIndices[i] + 1) % word.length;
        } else {
          // 30% chance to use a random character from the provided characters
          char = chars[Math.floor(Math.random() * chars.length)];
        }

        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += speed; // Apply speed multiplier
      }
    };

    // Adjust interval based on speed (faster speed = lower interval)
    const interval = setInterval(draw, 33 / speed);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [fontSize, color, characters, fadeOpacity, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
};

export default MatrixRain;
