
import { useEffect, useState } from 'react';
import { Timer } from 'lucide-react';

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
        <Timer className="h-4 w-4 text-buckazoids-yellow" />
        <span>{timeLeft.days}d {timeLeft.hours}h until Bitcoin 2025</span>
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <div className="flex justify-center space-x-4 mb-6">
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold text-white bg-black/70 px-4 py-2 rounded-lg">{timeLeft.days}</div>
          <div className="text-sm text-white font-medium mt-2">Days</div>
        </div>
        <div className="text-5xl font-bold text-white">:</div>
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold text-white bg-black/70 px-4 py-2 rounded-lg">{timeLeft.hours}</div>
          <div className="text-sm text-white font-medium mt-2">Hours</div>
        </div>
        <div className="text-5xl font-bold text-white">:</div>
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold text-white bg-black/70 px-4 py-2 rounded-lg">{timeLeft.minutes}</div>
          <div className="text-sm text-white font-medium mt-2">Minutes</div>
        </div>
        <div className="text-5xl font-bold text-white">:</div>
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold text-white bg-black/70 px-4 py-2 rounded-lg">{timeLeft.seconds}</div>
          <div className="text-sm text-white font-medium mt-2">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
