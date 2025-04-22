
import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  variant?: 'small' | 'large';
  className?: string;
}

const CountdownTimer = ({ variant = 'large', className = '' }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-05-27T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (variant === 'small') {
    return (
      <div className={`flex items-center space-x-2 text-sm ${className}`}>
        <span>{timeLeft.days}d {timeLeft.hours}h until Bitcoin 2025</span>
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <div className="inline-flex justify-center space-x-3 p-4 bg-black/10 backdrop-blur-sm rounded-lg">
        <div className="flex items-center">
          <div className="text-3xl font-mono font-bold text-white bg-black/70 px-3 py-1.5 rounded">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-2xl font-bold text-white mx-1">:</div>
          <div className="text-3xl font-mono font-bold text-white bg-black/70 px-3 py-1.5 rounded">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-2xl font-bold text-white mx-1">:</div>
          <div className="text-3xl font-mono font-bold text-white bg-black/70 px-3 py-1.5 rounded">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-2xl font-bold text-white mx-1">:</div>
          <div className="text-3xl font-mono font-bold text-white bg-black/70 px-3 py-1.5 rounded">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
