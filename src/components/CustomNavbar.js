import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  position: sticky;
  top: 0;
  background-color: #011111;
  z-index: 10000;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const StyledCollapse = styled(Navbar.Collapse)`
  display: flex;
  justify-content: space-between;
  font-size: 19px;
  padding-left: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledNavLink = styled(Nav.Link)`
  padding-left: 30px;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const CustomNavbar = () => {
  return (
    <StyledNavbar variant="dark" expand="lg" collapseOnSelect>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <StyledCollapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <StyledNavLink href="#about">About</StyledNavLink>
          <StyledNavLink href="#skills">Skills</StyledNavLink>
          <StyledNavLink href="#projects">Projects</StyledNavLink>
          <StyledNavLink href="#contact">Contact / View CV</StyledNavLink>
          <StyledNavLink
            href="https://github.com/PelegSwisa6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </StyledNavLink>
          <StyledNavLink
            href="https://www.linkedin.com/in/pelegswisa6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </StyledNavLink>
        </Nav>
      </StyledCollapse>
    </StyledNavbar>
  );
};

export default CustomNavbar;
