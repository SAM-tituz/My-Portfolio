import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./ContactModule.css";
import contactimg from "../../assets/contact-img.svg";

function Contact() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbx9ER5vVZkzPfqL0UF0_GV69f3KRljsPXAG4EoJWPLkL7TKl18NpBMYwEKWgp1Olcy0/exec"; // Replace with your actual script URL

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Send");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const form = new FormData();
    Object.keys(formData).forEach((key) => form.append(key, formData[key]));

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      console.error("Error!", error.message);
      alert("An error occurred.");
    }

    setButtonText("Send");
  };

  return (
    <section className="contact">
      <div className="contact-form-container">
        <Container>
          <Row>
            <Col md={6}>
              <div className="illustration">
                <img
                  src={contactimg}
                  alt="Illustration"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col md={6}>
              <h2>Get In Touch</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Your Message"
                    className="contactmessage"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  {buttonText}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Contact;
