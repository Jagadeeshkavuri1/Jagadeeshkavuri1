
import React, { useState } from 'react';
import styled from 'styled-components';

const FlashcardContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Flashcard = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const FlashcardButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Flashcards = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [index, setIndex] = useState(0);

  const flashcards = [
    { question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
    { question: 'What is JSX?', answer: 'A syntax extension for JavaScript that looks similar to HTML.' },
    { question: 'What are Hooks?', answer: 'Functions that allow you to use state and lifecycle features in functional components.' },
  ];

  const flipCard = () => setIsFlipped(!isFlipped);
  const nextCard = () => setIndex((prev) => (prev + 1) % flashcards.length);

  return (
    <FlashcardContainer>
      <h2>Flashcards</h2>
      <Flashcard>
        <h3>{isFlipped ? flashcards[index].answer : flashcards[index].question}</h3>
      </Flashcard>
      <FlashcardButton onClick={flipCard}>{isFlipped ? 'Show Question' : 'Show Answer'}</FlashcardButton>
      <FlashcardButton onClick={nextCard}>Next</FlashcardButton>
    </FlashcardContainer>
  );
};

export default Flashcards;
