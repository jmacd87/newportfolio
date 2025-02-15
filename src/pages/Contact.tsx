import { useState } from 'react';
import './Contact.css';

type Props = {};

export default function Contact({}: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2 className="section-title">03. Contact</h2>
        <div className="design-line" style={{ marginBottom: '2rem' }} />
        <p className="contact-description">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="contact-form-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="input-label">
              NAME
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="input-label">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="input-label">
              MESSAGE
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-input textarea"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
