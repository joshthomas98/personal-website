import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const hamburgerIcon = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" rx="4" fill="transparent" fillOpacity="0" />
    <rect x="4" y="12" width="16" height="2" rx="1" fill="#FFFFFF" />
    <rect x="4" y="6" width="16" height="2" rx="1" fill="#FFFFFF" />
    <rect x="4" y="18" width="16" height="2" rx="1" fill="#FFFFFF" />
  </svg>
);

const NavbarComponent = () => {
  return (
    <>
      <style>
        {`
          @media (max-width: 991px) {
            .text-navbar .navbar-nav {
              display: none;
            }

            .text-navbar .navbar-collapse.collapse.show .navbar-nav {
              display: flex;
            }

            .text-navbar .navbar-toggler {
              background-color: transparent;
              border-color: transparent;
            }
          }
        `}
      </style>

      <Navbar className="text-navbar bg-dark navbar-dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <a href="#" class="navbar-brand">
              Josh Thomas
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav">
            {hamburgerIcon}
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/codingportfolio">
                Coding Portfolio
              </Nav.Link>

              <Nav.Link as={Link} to="/music">
                Music
              </Nav.Link>

              <Nav.Link as={Link} to="/aboutme">
                About Me
              </Nav.Link>

              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
