import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import contact from "../assets/images/contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t8gmogo",
        "template_4w666jl",
        form.current,
        "1CBVCwgtAAF4oOcmP"
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {}
        <div className="contact-illustration">
          <img src={contact} alt="Contact" />
        </div>

        {}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/djurcikt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/djurcikT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>

          <h2>Contact Me</h2>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" rows="6" required />
          <button type="submit">Send Message</button>
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </div>
  );
}
