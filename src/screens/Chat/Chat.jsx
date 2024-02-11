import React, { useState } from 'react';
import './style.css'; // Import CSS file for styling
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Paper } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: -1,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
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
      // Add default static messages when the chat widget opens up
      setMessages([
        { text: 'Welcome to FEV.IO Bot! How can I assist you today?', sender: 'bot' },
        { text: 'We provide services in the following areas:', sender: 'bot' },
        { text: 'ADAS-AD / Software Integration / Infotainment / Systems Engineering  / Functional Safety /  Connected Mobility / Software Platforms' ,sender: 'bot' },
      
        { text: 'Please let me know which area you would like assistance with.', sender: 'bot' }
      ]);
    } else {
      // Clear messages when the chat widget is closed
      setMessages([]);
    }
  };
  

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) { // Check if the pressed key is the enter key
      handleSendMessage(); // Call the function to send the message
    }
  };
  return (

    <div>

      <div className="floating-action-button" >
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          
            <Fab color="primary" aria-label="edit" onClick={toggleChatWidget}>
            {isOpen ? <KeyboardArrowDownIcon sx={{ fontSize: 38 }}/> :  <EditIcon />}
          </Fab>
        </Box>

      </div>

      {isOpen && (

        <div className="chat-widget">
          {/* Chat window content */}
          <Box>
            <Paper elevation={2} style={{
              position: "absolute",
              width: "95%",
              height: "13%",
              padding: "10px",
              backgroundColor: '#0c035c',
              borderRadius: "8px",
            }}>

              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                style={{
                  position: "absolute",
                  padding: "15px",
                  left: "20%",
                  bottom: "12%",
                }}>

                <Avatar alt="FevBot" src="C:/Users/Medin/OneDrive/Documents/Internships Coding Folder/FEV.IO/FEV.IO_Test/src/icons/Chat Icons/robot.png" />
              </StyledBadge>
              <ArrowBackIosNewIcon sx={{ fontSize: 28 }} style={{
                position: "absolute",
                padding: "15px",
                left: "5%",
                color: '#FFFFFF',
                bottom: "16%",
              }} onClick={toggleChatWidget} > </ArrowBackIosNewIcon>
              <div > <p className='ChatBotName'> <b>FEV.IOBot</b></p></div>
              <div > <p className='ChatBotStatus'>Online</p></div>

            </Paper>


            <div className="messages">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.text}
                </div>
              ))}
            </div>
            <TextField
              label="Type your message..."
              value={inputValue}
              color="primary"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} // Add event handler for key down
              style={{
                position: "absolute",
                bottom: "10px",
                width: "90%",
                padding: "10px",
                left: "10px",
              }}
            />
          </Box>
        </div>


      )}
    </div>
  );
};

