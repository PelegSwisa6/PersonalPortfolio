import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

const HomePage = () => {
  const roles = [
    "Backend Developer",
    "FullStack Developer",
    "B.Sc. in Computer Science",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  const getNextRole = () => {
    setRoleIndex((roleIndex + 1) % roles.length);
  };

  const roleChange = useSpring({
    opacity: 0,
    reset: true,
    onRest: getNextRole,
    from: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <section id="about">
      <Container fluid className="text-light p-5">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="display-4 text-purple">
                Welcome to My Portfolio!
              </h1>
              <h2 className="text-light text-purple">Peleg Swisa</h2>
              <animated.p style={roleChange} className="lead text-purple">
                {roles[roleIndex]}
              </animated.p>
              <h3 className="text-purple">About Me</h3>
              <p className="text-purple">
                I am a hardworking individual with a Bachelor's degree in
                Computer Science. I have a passion for coding and enjoy delving
                into the intricacies of backend development. I am someone who
                values self-study and is always eager to expand my knowledge and
                skills.
              </p>
            </Col>
            <Col md={6}>
              <img
                src={require("../images/computer-image.png")}
                alt="Your Alt Text"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default HomePage;
