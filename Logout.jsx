
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e53935;
  }
`;

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        onLogout();
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default Logout;
