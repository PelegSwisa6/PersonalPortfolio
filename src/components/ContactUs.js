import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  const googleDriveCvLink =
    "https://drive.google.com/file/d/1luH6Qqjb91nX1i_bdbGDpaXVnpGv3mqC/view?usp=sharing";

  return (
    <section id="contact">
      <Container fluid className="text-light p-5">
        <h1 className="display-4">Contact Us</h1>
        <Row className="mt-4">
          <Col xs={12} md={6}>
            <p>
              Have a question or want to get in touch? Feel free to contact me
              via email or phone.
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:pelegswisa6@gmail.com">pelegswisa6@gmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong> 054-250-8941
            </p>
            <Button
              variant="primary"
              onClick={() => window.open(googleDriveCvLink, "_blank")}
            >
              View CV
            </Button>
          </Col>
          <Col>
            <div className="social-icons">
              <a
                href="https://github.com/PelegSwisa6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/pelegswisa6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
