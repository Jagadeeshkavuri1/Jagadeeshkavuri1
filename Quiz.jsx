import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris"
    },
    {
      question: "Which is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Venus"],
      answer: "Jupiter"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "NaCl"],
      answer: "H2O"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  return (
    <div className="quiz-container">
      <h2>Quiz</h2>
      {isQuizCompleted ? (
        <div className="quiz-results">
          <h3>Quiz Completed!</h3>
          <p>Your score: {score} out of {questions.length}</p>
        </div>
      ) : (
        <div className="quiz-question">
          <h3>{questions[currentQuestionIndex].question}</h3>
          <div>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={option}
                  name="option"
                  value={option}
                  onChange={handleOptionChange}
                  checked={selectedOption === option}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          <button onClick={handleNextQuestion} disabled={!selectedOption}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
