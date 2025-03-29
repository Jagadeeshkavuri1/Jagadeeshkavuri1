
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2025 Smart Study. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
