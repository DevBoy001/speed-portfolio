import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate form submission logic (e.g., via email or API)
    alert('Form Submitted!');
    setFormData({
      name: 'Derek',
      email: 'abdulhaqk133@gmail.com',
      message: 'Hello, Late Pluto🧑‍💻😈',
    });
  };

  return (
    <section className="contact">
      <div className="contact-content">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">
          I’d love to hear from you! Whether you have a question, project, or just want to chat, feel free to reach out.
        </p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-textarea"
          />
          <button type="submit" className="contact-button">Send Message</button>
        </form>

        <div className="social-links">
          <a href="https://twitter.com/yourhandle" className="social-link">Twitter</a>
          <a href="https://github.com/yourhandle" className="social-link">GitHub</a>
          <a href="https://linkedin.com/in/yourhandle" className="social-link">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;