import React, { useEffect, useState } from 'react';

function Time() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const now = new Date();
    const formattedTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    setCurrentTime(formattedTime);
  }, []);

  return (
    <div>
      <h1>Hello, I am Clock</h1>
      <h2>Now is {currentTime}</h2>
    </div>
  );
}

export default Time;