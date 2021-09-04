import React from 'react'
import "./contact.scss"

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h1>Get in touch.</h1>
        <span>My inbox is always open whether you have any questions, opportunities or just want to say hi, I'll try my best to respond!</span>
        <img src="assets/handshakeIcon.png" alt=""/>
      </div>
      <div className="right">
        <form>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}
