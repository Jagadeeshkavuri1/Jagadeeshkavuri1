
import React from 'react';
import styled from 'styled-components';
import PomodoroTimer from '../components/PomodoroTimer'; // Import PomodoroTimer component

const StudyToolsContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const StudyTools = () => {
  return (
    <StudyToolsContainer>
      <h2>Study Tools</h2>
      <p>Enhance your productivity with these amazing study tools!</p>
      
      
      <PomodoroTimer />
    </StudyToolsContainer>
  );
};

export default StudyTools;
