import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pythonImage from "../images/python-image.png";
import djangoFlaskImage from "../images/Django-vs-Flask-1.jpg";
import jsImage from "../images/JavaScriptLogo.png";
import reactImage from "../images/react-image.png";
import nodeJSImage from "../images/nodejs-image.png";
import expressImage from "../images/express-image.png";
import htmlImage from "../images/htmlcssjs-overview.png";
import javaImage from "../images/java-image.png";
import CImage from "../images/C-image.png";
import gitImage from "../images/git-image.JPEG";
import gitLabImage from "../images/gitlab-image.webp";
import vmsImage from "../images/vms.png";
import vscodeImage from "../images/vscode-image.jpg";
import pyImage from "../images/pycharm-image.png";
import eclipseImage from "../images/eclipse-image.png";
import mySQLImage from "../images/MySQL.png";
import mongoImage from "../images/mongo-imagepng.png";
import dockerImage from "../images/Docker-image.png";

const Skills = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const programmingLanguages = [
    { title: "Python (Django, Flask)", image: pythonImage },
    { title: "JavaScript", image: jsImage },
    { title: "Django / Flask", image: djangoFlaskImage },
    { title: "React", image: reactImage },
    { title: "Node.js", image: nodeJSImage },
    { title: "Express.js", image: expressImage },
    { title: "HTML, CSS , JS", image: htmlImage },
    { title: "Java", image: javaImage },
    { title: "C++", image: CImage },
  ];

  const toolsIdesAndDB = [
    { title: "GitHUB", image: gitImage },
    { title: "GitLab", image: gitLabImage },
    { title: "VMware, Virtual Box", image: vmsImage },
    { title: "MySQL", image: mySQLImage },
    { title: "MongoDB", image: mongoImage },
    { title: "VS Code", image: vscodeImage },
    { title: "PyCharm", image: pyImage },
    { title: "Eclipse", image: eclipseImage },
    { title: "Docker", image: dockerImage },
  ];

  const animatedProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const renderCard = (title, image, index) => (
    <Col key={index} xs={12} md={6} lg={4}>
      <animated.div style={animatedProps}>
        <Card className="mb-3" style={{ height: "35vh", width: "35vh" }}>
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            style={{ height: "25vh", width: "35vh" }}
          />
          <Card.Body>
            <Card.Title
              style={{
                font: "caption",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {title}
            </Card.Title>
          </Card.Body>
        </Card>
      </animated.div>
    </Col>
  );

  const sliderSettings = {
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: isSmallScreen ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const sliderSettingsReverse = {
    ...sliderSettings,
    rtl: true,
  };

  return (
    <section id="skills">
      <Container fluid className="text-light p-5">
        <h1 className="display-4">Skills</h1>
        <p>
          Here are some of the programming languages, IDEs, operating systems,
          and other skills & technologies I am proficient in:
        </p>
        <Row className="mt-4">
          <Col>
            <Slider {...sliderSettings} className="slider-left">
              {programmingLanguages.map((language, index) =>
                renderCard(language.title, language.image, index)
              )}
            </Slider>
          </Col>

          <Col>
            <Slider {...sliderSettingsReverse} className="slider-right">
              {toolsIdesAndDB.map((tool, index) =>
                renderCard(tool.title, tool.image, index)
              )}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
