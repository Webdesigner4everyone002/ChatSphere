import React, { useState } from 'react';
import './ChatBox.css';
import assets from '../../assets/assets';

const ChatBox = () => {
  const [messages, setMessages] = useState([]); // To store the list of messages
  const [input, setInput] = useState(''); // To store the current input

  const handleSend = () => {
    if (input.trim() === '') return; // Prevent sending empty messages
    const newMessage = { text: input, time: new Date().toLocaleTimeString(), sender: 'user' };
    setMessages([...messages, newMessage]); // Add the new message to the list
    setInput(''); // Clear the input field
  };

  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="Profile" />
        <p>
          Richard Sanford <img className="dot" src={assets.green_dot} alt="Online Status" />
        </p>
        <img src={assets.help_icon} className="help" alt="Help Icon" />
      </div>
      <div className="chat-msg">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? 'r-msg' : 's-msg'}>
            <p className="msg">{msg.text}</p>
            <div>
              <img src={assets.profile_img} alt="Profile" />
              <p>{msg.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Send a message"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Update input state as user types
        />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="Gallery Icon" />
        </label>
        <img
          src={assets.send_button}
          alt="Send Button"
          onClick={handleSend} // Trigger message send on click
          style={{ cursor: 'pointer' }} // Make the send button clickable
        />
      </div>
    </div>
  );
};

export default ChatBox;
