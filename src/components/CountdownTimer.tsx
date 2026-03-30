import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const FlipDigit = ({ value, unit }: any) => {
  const [prevValue, setPrevValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setPrevValue(value);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  return (
    <div className="flex flex-col items-center">
      <div className={`glass-card w-20 h-24 md:w-24 md:h-28 flex items-center justify-center mb-2 relative overflow-hidden group flip-digit ${isAnimating ? 'animating' : ''}`}>
        <div className="absolute inset-0 bg-cyan/5 group-hover:bg-cyan/10 transition-colors" />
        
        <div className="flip-digit-inner relative z-10 w-full h-full flex items-center justify-center">
          <span className="text-3xl md:text-4xl font-display text-cyan text-glow-cyan">
            {value.toString().padStart(2, '0')}
          </span>
        </div>

        {/* Digital display line effect */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan/20 z-20" />
      </div>
      <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-sub font-bold">
        {unit}
      </span>
    </div>
  );
};

export const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = Object.entries(timeLeft).map(([unit, value]) => (
    <FlipDigit key={unit} value={value as number} unit={unit} />
  ));

  return (
    <div className="grid grid-cols-2 md:flex gap-4 md:gap-6">
      {timerComponents}
    </div>
  );
};
