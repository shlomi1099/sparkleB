import React, { useEffect, useState } from "react";
import "./Clock.css";

const formatTime = (num) => num.toString().padStart(2, "0");

const BouncyClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = formatTime(time.getHours() % 12 || 12);
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());
  const ampm = time.getHours() >= 12 ? "PM" : "AM";

  const dateString = time.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="clock-wrapper">
      <div className="clock">
        <div className="clock__box">{hours}</div>
        <div className="clock__box">{minutes}</div>
        <div className="clock__colon">:</div>
        <div className="clock__box">{seconds}</div>
        <div className="clock__box">{ampm}</div>
      </div>
      <div className="clock__date">{dateString}</div>
    </div>
  );
};

export default BouncyClock;
