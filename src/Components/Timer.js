import React, { useState, useEffect } from "react";

const Timer = () => {
  const [days, setDays] = useState(8);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        setSeconds(59);
        if (minutes === 0 && hours === 0 && days === 0) {
          clearInterval(timer);
        } else {
          setMinutes((prevMins) => prevMins - 1);
        }
        if (minutes === 0) {
          setHours((prevHours) => prevHours - 1);
        }
        if (hours === 0) {
          setDays((prevDays) => prevDays - 1);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds, minutes, hours, days]);

  return (
    <div className="timer">
      <div className="time">
        <span className="time-data">{days < 10 ? `0${days}` : days}</span>
        <p>DAYS</p>
      </div>
      <div className="time">
        <span className="time-data">{hours < 10 ? `0${hours}` : hours}</span>
        <p>HOURS</p>
      </div>
      <div className="time">
        <span className="time-data">
          {minutes < 10 ? `0${minutes}` : minutes}
        </span>
        <p>MINUTES</p>
      </div>
      <div className="time">
        <span className="time-data">
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
        <p>SECONDS</p>
      </div>
    </div>
  );
};

export default Timer;
