import React from 'react';
import { Button } from 'bootstrap';
import './Chat.css';
import { useState } from 'react';

const Chat = () => {
  const [msg, setMsg] = useState('');
  function handleChange(e) {
    console.log(e.target.value);
    setMsg(e.target.value);
  }
  return (
    <div className="container" bg-danger>
      <div className='container conversation'></div>
      <textarea
        class="w-100 chat-container"
        placeholder="Type message here..."
        onChange={(e) => handleChange(e)}
      ></textarea>
      <button type="button" className="btn btn-primary send">
        Send
      </button>
    </div>
  );
};

export default Chat;
