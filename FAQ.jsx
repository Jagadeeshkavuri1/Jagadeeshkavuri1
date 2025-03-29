
import React from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Question = styled.h3`
  margin: 20px 0;
  color: #4CAF50;
`;

const Answer = styled.p`
  margin: 10px 0;
  font-size: 1.1rem;
`;

const FAQ = () => {
  return (
    <FAQContainer>
      <h2>Frequently Asked Questions</h2>
      <div>
        <Question>What is Pomodoro Technique?</Question>
        <Answer>
          The Pomodoro Technique is a time management method that breaks work into intervals (usually 25 minutes), followed by a short break. It's designed to enhance focus and productivity.
        </Answer>

        <Question>How do I use the Flashcards tool?</Question>
        <Answer>
          You can create flashcards to help with memorizing key concepts or definitions. You’ll be able to view both questions and answers, flipping the card as needed.
        </Answer>

        <Question>How do I track my study progress?</Question>
        <Answer>
          You can track your study progress by setting specific goals and milestones. Additionally, the website includes a Pomodoro Timer that allows you to monitor how much time you spend studying.
        </Answer>

        <Question>Is this website free?</Question>
        <Answer>
          Yes, Smart Study is completely free to use. You can access all tools and resources without any costs.
        </Answer>
      </div>
    </FAQContainer>
  );
};

export default FAQ;
