
import React, { useState } from 'react';
import styled from 'styled-components';

const ProgressTrackerContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const GoalInput = styled.input`
  padding: 10px;
  width: 80%;
  max-width: 400px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

const ProgressBarContainer = styled.div`
  margin-top: 20px;
  width: 80%;
  max-width: 400px;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: #4CAF50;
  transition: width 0.3s ease-in-out;
`;

const ProgressTracker = () => {
  const [goal, setGoal] = useState('');
  const [currentProgress, setCurrentProgress] = useState('');
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleProgressChange = (e) => {
    setCurrentProgress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate progress percentage
    if (goal && currentProgress) {
      const calculatedProgress = (currentProgress / goal) * 100;
      setProgress(Math.min(calculatedProgress, 100));  // Ensure max progress is 100%

      setMessage(`You're ${Math.min(calculatedProgress, 100).toFixed(2)}% of the way there!`);
    } else {
      setMessage('Please enter both goal and progress values.');
    }
  };

  return (
    <ProgressTrackerContainer>
      <h2>Study Progress Tracker</h2>
      <p>Set your study goal and track your progress as you go!</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Study Goal (e.g., total hours or chapters): 
            <GoalInput
              type="number"
              placeholder="Enter goal (e.g., total hours)"
              value={goal}
              onChange={handleGoalChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Current Progress (e.g., hours studied): 
            <GoalInput
              type="number"
              placeholder="Enter current progress"
              value={currentProgress}
              onChange={handleProgressChange}
              required
            />
          </label>
        </div>
        <Button type="submit">Track Progress</Button>
      </form>

      {message && <p>{message}</p>}

      <ProgressBarContainer>
        <ProgressBar progress={progress} />
      </ProgressBarContainer>
    </ProgressTrackerContainer>
  );
};

export default ProgressTracker;
