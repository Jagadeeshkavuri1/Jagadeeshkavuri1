// src/pages/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  width: 80%;
  max-width: 400px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  width: 80%;
  max-width: 400px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
  //   if (!formData.name || !formData.email || !formData.message) {
  //     alert('Please fill in all fields!');
  //     return;
  //   }
  
  //   alert('Your message has been sent!');
  //   setFormData({ name: '', email: '', message: '' });
  // };
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ab8e3778-586a-468f-805d-8ebd5db5480c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <p>We would love to hear from you! Please fill out the form below.</p>
      
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="6"
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>
      <span>{result}</span>
    </ContactContainer>

  );
};

export default Contact;
