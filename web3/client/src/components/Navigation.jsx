import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Elem = styled.div`
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
          <Link to="/">
            <Elem>Home</Elem>
          </Link>
          <Link to="/list">
            <Elem>NFTList</Elem>
          </Link>
          <Elem onClick={() => console.log("hi")}>Login</Elem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
