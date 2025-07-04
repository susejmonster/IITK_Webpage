import React, { FC } from 'react';
import './navbar.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const CustomNavbar: FC = () => {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">HV Lab,IITk</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">Members</Nav.Link>
            <Nav.Link href="/ResearchPublications">Research </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;

