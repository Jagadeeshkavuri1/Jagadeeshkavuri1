
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  margin: 5px;
  
  &:hover {
    background-color: #45a049;
  }
`;

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      alert('Time’s up! Take a short break.');
      setTimeLeft(25 * 60);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startTimer = () => setIsActive(true);
  const stopTimer = () => setIsActive(false);
  const resetTimer = () => setTimeLeft(25 * 60);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <TimerContainer>
      <h2>Pomodoro Timer</h2>
      <h3>{formatTime(timeLeft)}</h3>
      {!isActive ? (
        <Button onClick={startTimer}>Start</Button>
      ) : (
        <Button onClick={stopTimer}>Pause</Button>
      )}
      <Button onClick={resetTimer}>Reset</Button>
    </TimerContainer>
  );
};

export default PomodoroTimer;