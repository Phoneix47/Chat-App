import React from 'react';
import { Button } from 'bootstrap';
import './Chat.css';
import { useState } from 'react';
import { io } from 'socket.io-client';

const Chat = () => {
  const [msg, setMsg] = useState('');
  const [incomingMsg, setIncomingMsg] = useState('');

  const socket = io(`http://localhost:4000`, {
    reconnectionDelayMax: '1000',
  });

  socket.on('message', (text) => {
    console.log(text);
    setIncomingMsg(text);
  
    const el = document.createElement('li');
    el.innerText = incomingMsg;
    el.style = 'color:red';
    document.querySelector('ul').appendChild(el);
  });

  function send() {
    socket.send(msg);
  }

  function handleChange(e) {
    console.log(e.target.value);
    setMsg(e.target.value);
  }
  return (
    <div className="container" bg-danger>
      <ul className="container conversation">{incomingMsg}</ul>
      <textarea
        class="w-100 chat-container"
        placeholder="Type message here..."
        onChange={(e) => handleChange(e)}
      ></textarea>
      <button
        onClick={() => send()}
        type="button"
        className="btn btn-primary send"
      >
        Send
      </button>
    </div>
  );
};

export default Chat;
