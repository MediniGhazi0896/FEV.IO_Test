import React, { useState } from 'react';
import './style.css'; // Import CSS file for styling

export const Chat = () => {

   const [messages, setMessages] = useState([]); // State to store chat messages
  const [inputValue, setInputValue] = useState(''); // State to manage input value
  const [isOpen, setIsOpen] = useState(false); // State to manage chat widget visibility

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
    }
  };
  
    const toggleChatWidget = () => {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setMessages([]);
      }
    };
  
    return (
      <div>
      <div className="floating-action-button" onClick={toggleChatWidget}>
        {isOpen ? 'Close Chat' : 'Open Chat' }
      </div>
      {isOpen && (
        <div className="chat-widget">
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          {/* Chat window content */}
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

