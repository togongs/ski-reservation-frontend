import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(10); // 남은 시간 (단위: 초)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);

      if (time < 0) {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  //   useEffect(() => {
  //     if (time < 0) {
  //       alert('Time OVER!');
  //     }
  //   }, [time]);
  //   setMin(Math.floor(time.current / 60));
  //   setSec(time.current % 60);

  return (
    <span>
      {/* {min}:{sec < 10 ? `0${sec}` : sec} */}
      {Math.floor(time / 60)}분{/* {min}분 {sec}초 */}
      {time % 60}초
    </span>
  );
};

export default Timer;
