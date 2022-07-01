import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri'
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>moavizq@gmail.com</h5>
            <a href="mailto:moavizq@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>moaviz.45</h5>
            <a href="https://m.me/moaviz.45" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+923156198610</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+923156198610"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input type="text" placeholder="Your Full Name" />
          <input type="text" placeholder="Your Email" />
          <textarea></textarea>
          <buttton className="btn btn-primary">Send Message</buttton>
        </form>
      </div>
    </section>
  )
}

export default Contact
