import { useState, useEffect } from "react";

const Countdown = () => {
  const festDate = new Date("2025-04-10T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(festDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(festDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [festDate]);

  const formatTime = (ms: number) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return <div>{formatTime(timeLeft)}</div>;
};

export default Countdown;
