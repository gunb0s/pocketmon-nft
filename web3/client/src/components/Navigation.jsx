import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";

const LogIn = styled.div`
  color: rgba(255, 255, 255, 0.55);
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  cursor: pointer;
`;
const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Minting</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/list">NFTList</Nav.Link>
          <LogIn onClick={() => console.log("hi")}>Login</LogIn>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
