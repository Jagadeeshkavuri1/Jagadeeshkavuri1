import React, { useState } from 'react';
import './Chatbot.css'; 

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  
  const botResponses = {
    'hi': 'Hello! How can I help you today?',
    'hello': 'Hi there! How can I assist you?',
    'how are you?': 'I am just a bot, but I am doing great!',
    'default': 'Sorry, I didn\'t understand that. Can you try rephrasing?'
  };

 
  const handleSendMessage = () => {
    if (input.trim()) {
      
      setMessages([...messages, { sender: 'user', text: input }]);

      
      const response = botResponses[input.toLowerCase()] || botResponses['default'];
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: input },
        { sender: 'bot', text: response }
      ]);
      
      setInput('');
    }
  };

 
  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <div>
     
      <button onClick={toggleChatbot} className="chatbot-toggle-button">
        {isChatbotVisible ? 'Close Doubts' : 'Open Doubts'}
      </button>

      
      {isChatbotVisible && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Doubts</h3>
            <button onClick={toggleChatbot} className="toggle-button">Close</button>
          </div>
          
          
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>

          
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
