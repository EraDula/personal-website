import React from 'react'
import "./contact.scss"
import { useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h1>Get in touch.</h1>
        <span>My inbox is always open whether you have any questions, opportunities or just want to say hi, I'll try my best to respond!</span>
        <img src="assets/handshakeIcon.png" alt=""/>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <button type="submit"><a href="mailto:eradula01@hotmail.com">Say Hi!</a></button>
        </form>
      </div>
    </div>
    
  )
}
