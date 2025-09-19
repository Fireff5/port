import React, { useState } from "react";
import './Contact.css';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fc886c00-4495-40ee-8aab-4ef54e62715a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("message send Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="Contact section id">
    <div>
      <h3 className=" Contact form">Contact Me</h3>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Your name" required/>
        <input type="email" name="email" placeholder="Email Address" required/>
        <textarea name="message" placeholder="Type message" required></textarea>
        <button type="submit">Send</button>

      </form>
      <span>{result}</span>

    </div>
    </section>
  );
}


export default Contact;
