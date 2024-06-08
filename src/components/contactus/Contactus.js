import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Please fill in all the required fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/submitForm",
        formData
      );
      console.log(response.data.message); // Log the response from the backend

      alert(`Thanks ${formData.name}, I will shortly connect with you!`);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Backend Server was not Running while submitting the form.");
    }
  };

  const mapOptions = {
    center: { lat: 9.0074, lng: 38.7678 },
    zoom: 12,
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="contact">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formName">
                        <Form.Label className="label-class">Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-input input-class"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="formEmail">
                        <Form.Label className="label-class">Email address</Form.Label>
                        <Form.Control
                          type="email"
                          className="form-input input-class"
                          name="email"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="formMessage">
                        <Form.Label className="label-class">Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          className="form-message input-class"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <div className="submit-btn">
                        <Button
                          type="submit"
                          className="submitBtn"
                        >
                          Submit
                          <AiOutlineSend className="send-icon" />
                        </Button>
                      </div>
                    </Form>
                  </div>
                </Col>
                <Col md={7}>
                  <div className="contacts-details">
                    <a
                      href={`mailto:awoke8817@gmail.com`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        awoke8817@gmail.com
                      </p>
                    </a>
                    <a
                      href={`tel:+251930950562`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>+251930950562</p>
                    </a>
                    <a
                      href="https://www.google.com/maps/place/Addis+Ababa,+Ethiopia/@9.0074,38.7678,11z/data=!3m1!4b1!4m5!3m4!1s0x164b85cef5ab402d:0x8467b6b037a24d49!8m2!3d9.0074!4d38.7678"
                      className="personal-details"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon">
                          <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          Addis Ababa,
                          Ethiopia.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="contact-map">
                    <LoadScript googleMapsApiKey="AIzaSyBTR8Qq90Lk8L-4MG7r-TgzgWsL8r5XCT8">
                      <GoogleMap
                        mapContainerClassName=""
                        options={mapOptions}
                      >
                        <Marker position={mapOptions.center} />
                      </GoogleMap>
                    </LoadScript>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Contactus;