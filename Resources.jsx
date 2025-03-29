// src/pages/Resources.js
import React from 'react';
import styled from 'styled-components';

const ResourcesContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Resources = () => {
  return (
    <ResourcesContainer>
      <h2>Study Resources</h2>
      <ul>
        <li><a href="https://www.khanacademy.org/" target="_blank" rel="noopener noreferrer">Khan Academy</a></li>
        <li><a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer">Coursera</a></li>
        <li><a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer">edX</a></li>
      </ul>
    </ResourcesContainer>
  );
};

export default Resources;
