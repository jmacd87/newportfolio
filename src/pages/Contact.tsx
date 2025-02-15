import { useState } from 'react';
import './Contact.css';

type Props = {};

export default function Contact({}: Props) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [messageSuccessful, setMessageSuccessful] = useState<boolean | null>(
    null
  );

  const handleSubmit = async (event: React.FormEvent) => {
    setMessageSuccessful(false);
    setError('');
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append('access_key', `${import.meta.env.VITE_EMAIL_API}`);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success', res);
      setName('');
      setEmail('');
      setMessage('');
      setMessageSuccessful(true);
    }
    if (!res.success) {
      setError(res.message);
    }
    setTimeout(() => {
      setMessageSuccessful(null);
    }, 10000);
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
              name="first_name"
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
              name="email"
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
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              className="form-input textarea"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            SEND MESSAGE
          </button>
          {messageSuccessful && (
            <p className="success-message">
              Your email has been successfully sent!
            </p>
          )}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}
