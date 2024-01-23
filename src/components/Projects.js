import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styled from "styled-components";

const ResponsiveCard = styled(Card)`
  height: 70vh;
  width: 40vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    height: 90vh;
    width: 50vh;
  }

  @media (max-width: 767px) {
    height: 50vh;
    width: 35vh;
  }
`;

const Projects = () => {
  const projectsData = [
    {
      title: "AI ChatBot",
      description:
        "An internet application that receives a PDF file from the user, learns its content, and can respond to user queries using artificial intelligence.",
      skills: "React, Flask server, lang Chain library (python)",
      repoLink: "https://github.com/PelegSwisa6/chatWithPdf/tree/main",
      liveLink: "https://chatwithpdf-flask-app-frontend.onrender.com",
    },
    {
      title: "Learning & Quiz App",
      description:
        "An internet application where you can learn and answer questions that are in the database. The application will 'teach' the user and ask him more often the questions he has difficulty with and less the ones he doesn't.",
      skills: "React, Node.js, Express.js, MongoDB, GitLab",
      repoLink: "https://gitlab.com/PelegSwisa6/interview-project",
      liveLink: "https://interviewproject.onrender.com/#/signin",
    },
    {
      title: "Inventory Management",
      description:
        "As part of the final project, we as a team developed an application that takes care of the inventory management of a business and the delivery service and purchase management for customers.",
      skills: "React, Django, Python, MySQL, GitLab",
      repoLink: "https://gitlab.com/PelegSwisa6/co-feds",
      liveLink: "https://exlab-sapir.com:8082/",
    },
    {
      title: "Fault-Tolerant Servers",
      description:
        "Two servers that run non-stop, receive information from customers and save the information in a database. In the event of a malfunction, the secondary server will handle the customers, update the staff by sending an email and try to restart the main server.",
      skills: "Java, MySQL",
      repoLink: "https://github.com/PelegSwisa6/LogoWithEmail",
      architectureLink:
        "https://drive.google.com/file/d/11THy-yYkCzD_RoK3FWznJTMRB5ccUDFS/view?usp=sharing",
    },
  ];

  const renderProjectCard = (project, index) => (
    <Col key={index} xs={12} md={6} lg={3}>
      <ResponsiveCard className="mb-3">
        <Card.Body>
          <Card.Title style={{ fontFamily: "monospace", fontSize: "20px" }}>
            {project.title}
          </Card.Title>
          <Card.Text style={{ fontFamily: "revert" }}>
            {project.description}
          </Card.Text>
          <Card.Text style={{ fontFamily: "monospace" }}>
            <strong>Skills:</strong> {project.skills}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="sec"
            href={project.repoLink}
            target="_blank"
            className=" btn-custom"
            style={{ width: "30vh", mb: 2 }}
          >
            View Repo
          </Button>
          {project.liveLink && (
            <Button
              variant="sec"
              href={project.liveLink}
              className="btn-custom"
              style={{
                width: "30vh",
              }}
            >
              Live Demo
            </Button>
          )}
          {project.architectureLink && (
            <Button
              variant="sec"
              href={project.architectureLink}
              className="btn-custom"
              style={{ width: "30vh" }}
            >
              Document
            </Button>
          )}
        </Card.Footer>
      </ResponsiveCard>
    </Col>
  );

  return (
    <section id="projects">
      <Container fluid className="text-light p-5">
        <h1
          className="display-4"
          style={{ fontFamily: "monospace", fontSize: "45px" }}
        >
          My Projects
        </h1>
        <Row className="mt-4">
          {projectsData.map((project, index) =>
            renderProjectCard(project, index)
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
