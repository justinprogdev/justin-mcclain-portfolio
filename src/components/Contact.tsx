// src/components/Contact.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { db } from '../FirebaseConfig'; // Ensure the correct path
import { collection, addDoc } from 'firebase/firestore';
import './Contact.css'; // Import the CSS file

interface FormData {
  email: string;
  message: string;
  phone?: string;
}

interface FormErrors {
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: '',
    phone: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = (): boolean => {
    let tempErrors: FormErrors = {};
    if (!formData.email) tempErrors.email = "Email is required.";
    if (!formData.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        await addDoc(collection(db, "contacts"), {
          email: formData.email,
          message: formData.message,
          phone: formData.phone || null,
          timestamp: new Date()
        });
        alert("Form submitted successfully!");
        setFormData({ email: '', message: '', phone: '' }); // Reset form after successful submission
      } catch (error) {
        console.error("Error adding document: ", error);
        alert("There was an error submitting the form.");
      }
    } else {
      alert("Please fill in the required fields.");
    }
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>
        <div>
          <label>Phone (optional):</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
