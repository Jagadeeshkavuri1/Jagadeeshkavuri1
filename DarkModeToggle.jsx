
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: #fff;
  color: black;
  padding: 10px;
  border-radius: 5px;
  
`;

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#333' : '#fff';
    document.body.style.color = darkMode ? '#fff' : '#000';
  }, [darkMode]);

  return (
    <ToggleContainer onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </ToggleContainer>
  );
};

export default DarkModeToggle;
