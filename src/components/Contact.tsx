import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import "./Contact.css";

// Define data structure for form data.
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define data structure for contact data.
interface ContactData {
  name: string;
  phone: string;
  email: string;
}

// Create functional component for getting form data.
const Contact: React.FC = () => {
  // State to hold the form data.
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // State for submission status.
  const [submitted, setSubmitted] = useState<boolean>(false);

  // State for contact data from JSON file.
  const [contactData, setContactData] = useState<ContactData | null>(null);

  // State for input errors.
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Fetch contact data from JSON file on component mount.
  useEffect(() => {
    fetch("/site-data.json")
      .then((response) => response.json())
      .then((data) => setContactData(data.contactData))
      .catch((error) => console.error("Error fetching contact data:", error));
  }, []);

  // Build error for result from validating form inputs.
  const validate = () => {
    let errors: { [key: string]: string } = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  // On change, set the FormData state and clear the error for the current field.
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // On submit, validate the form and set submitted if there are no errors.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    
    // If object exists in error persist them and do not mark submitted.
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="contact">
      <h1>Contact Justin</h1>
      <p>
        I would love to hear from you, enter your contact info, and you may
        contact me directly!
      </p>
      {submitted ? (
        <div className="contact-details">
          <p>Thank you for reaching out!
            Contact me directly:
          </p>
          {contactData && (
            <>
              <div className="contactData">Name: {contactData.name}</div>
              <div className="contactData">Email: {contactData.email}</div>
              <div className="contactData">Phone: {contactData.phone}</div>
            </>
          )}
        </div>
      ) : (
        // Form submit could be used for a data store, but I could not figure out how to secure my firebase on free hosting so I did not do it.
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
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
