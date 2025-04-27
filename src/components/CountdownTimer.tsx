
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
        <div className="flex items-center gap-2 bg-gradient-to-r from-buckazoids-orange to-buckazoids-yellow p-[1px] rounded-lg">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg">
            <div className="flex items-center space-x-1">
              <span className="font-mono font-bold text-buckazoids-orange">
                {timeLeft.days.toString().padStart(2, '0')}
              </span>
              <span className="text-xs text-buckazoids-orange/70">d</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-mono font-bold text-buckazoids-orange">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
              <span className="text-xs text-buckazoids-orange/70">h</span>
            </div>
            <span className="text-sm font-medium text-buckazoids-orange">
              until Bitcoin 2025
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <div className="inline-flex justify-center items-center space-x-4 p-6 bg-gradient-to-r from-buckazoids-orange to-buckazoids-yellow rounded-xl">
        <div className="flex items-center gap-4">
          <TimeBox value={timeLeft.days} label="DAYS" />
          <TimeBox value={timeLeft.hours} label="HOURS" />
          <TimeBox value={timeLeft.minutes} label="MIN" />
          <TimeBox value={timeLeft.seconds} label="SEC" />
        </div>
      </div>
    </div>
  );
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
      <span className="font-mono font-bold text-2xl text-buckazoids-orange">
        {value.toString().padStart(2, '0')}
      </span>
    </div>
    <span className="mt-2 text-xs font-medium text-white">{label}</span>
  </div>
);

export default CountdownTimer;
