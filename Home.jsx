
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const HeroSection = styled.div`
  margin-bottom: 30px;
  background-color: #4CAF50;
  color: white;
  padding: 50px;
  border-radius: 10px;
`;

const Button = styled(Link)`
  padding: 15px 30px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  margin-top: 20px;
  display: inline-block;

  &:hover {
    background-color: #45a049;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <h1>Welcome to Smart Study</h1>
        <p>Enhance your productivity with study tools, resources, and effective techniques.</p>
        <Button to="/study-tools">Start Using Study Tools</Button>
      </HeroSection>

      <h2>What We Offer</h2>
      <p>Explore our range of tools to boost your study sessions and improve your focus.</p>
      <div>
        <Button to="/resources">Check Out Resources</Button>
        <Button to="/faq" style={{ marginLeft: '10px' }}>FAQ</Button>
      </div>
    </HomeContainer>
  );
};

export default Home;
