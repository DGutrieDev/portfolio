import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import "../styles/Contact.css";

function Contact() {
  const [email] = useState("dennyg.dev@gmail.com");
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await axios.post(`${API_URL}/contact`, {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });
      console.log(response);
      if (response.status === 200) {
        toast.success(`${response.data}`, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        form.reset();
      } else {
        toast.error(`${response.data}`, {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      toast.error(`${error.response.data}`, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <div className="contact_container">
      <div className="form_container">
          <div className="text_form">
            <h1>Contact Me</h1>
            <p>
              Feel free to complete the form to contact me with any questions or
              queries
            </p>
          </div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <input type="text" placeholder="Subject" name="subject" />
            <textarea placeholder="Message" name="message"></textarea>
            <button type="submit">Send</button>
          </form>
          <div className="copy_email">
            <p>If you prefer, you can copy this email to contact me</p>
            <div className="email">
              <input type="text" value={email} readOnly />
              <button
                onClick={copyEmail}
                data-tip="Copy email to clipboard"
                data-for="copy"
              >
                <i className="bx bx-copy"></i>
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Contact;
