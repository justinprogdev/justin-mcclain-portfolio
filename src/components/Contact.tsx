import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <h1>Contact Justin</h1>
      <p>I would love to hear from you, enter your contact info, and you may contact me directly!</p>
      {submitted ? (
        <div className="contact-details">
          <p>Thank you for reaching out!</p>
          <p>You can contact me directly at:</p>
          <p>Email: developmentjustin7@gmail.com</p>
          <p>Phone: (260) 247-6684</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;