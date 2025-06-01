
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Timer } from "lucide-react";

const CONFERENCE_DATE = new Date('2026-04-27T00:00:00');

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = CONFERENCE_DATE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <Card className="bg-white/90 backdrop-blur p-6">
        <div className="flex items-center justify-center gap-2 mb-4 text-[#f7931a]">
          <Timer className="w-6 h-6" />
          <h3 className="text-lg font-semibold">Bitcoin 2026 Countdown</h3>
        </div>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-[#f7931a]">{timeLeft.days}</span>
            <span className="text-sm text-gray-600">Days</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-[#f7931a]">{timeLeft.hours}</span>
            <span className="text-sm text-gray-600">Hours</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-[#f7931a]">{timeLeft.minutes}</span>
            <span className="text-sm text-gray-600">Minutes</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-[#f7931a]">{timeLeft.seconds}</span>
            <span className="text-sm text-gray-600">Seconds</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CountdownTimer;
