import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { contactConfig } from "./content_option";
import axios from 'axios';

export default class Contact extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    axios
      .post('/send-email', formData)
      .then((response) => {
        console.log(response);
        // Handle successful form submission
      })
      .catch((error) => {
        console.error(error);
        // Handle form submission error
      });
  };
  render() {
  return (
    <div>
  <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h2  className="display-4 mb-4">Contact Us </h2>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_PHONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_PHONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact__form w-100" onSubmit={this.handleSubmit}>
            <h2>Fill-In Form Field</h2>
              <Row>
                <Col lg="6" className="form-group">
                
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn btn-block col-md-12"  type="submit"> 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <div>
        <h1 className="text-center ">
          Google Map Address
        </h1>
      </div>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.770275363542!2d77.51560167425356!3d12.922481215954972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e21c103985b%3A0x7af7b0258b8258fa!2sMatrical%20Technologies!5e0!3m2!1sen!2sin!4v1685165598387!5m2!1sen!2sin" width="100%" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
      </div>

  );
}
}