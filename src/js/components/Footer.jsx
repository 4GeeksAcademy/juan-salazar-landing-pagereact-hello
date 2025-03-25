import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <p className="text-center fs-3">© {new Date().getFullYear()} Juan Salazar</p>
      </Container>
    </footer>
  );
}

export default Footer;