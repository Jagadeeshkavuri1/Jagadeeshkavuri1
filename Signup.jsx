
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components';


const SignupContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 80%;
  max-width: 400px;
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

const Signup = ({ onSignupSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onSignupSuccess();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <SignupContainer>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <Input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <Button type="submit">Sign Up</Button>
      </form>
      {error && <p>{error}</p>}
    </SignupContainer>
  );
};

export default Signup;
