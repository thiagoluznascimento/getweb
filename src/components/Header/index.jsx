import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImage from "../../assets/images/logo.png";
import "./style.css";

function Header() {
    return (
        <>
        <Navbar expand="md" className="custom-navbar" >
            <Container>
                <Navbar.Brand as={Link} to="/" className="nav-brand">
                <img src={logoImage} width="30" height="30" className="d-inline-block align-top" alt='Logo pioneira' />
                GetWeb</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link as={Link} to="/" className="nav-link">Início</Nav.Link>
                        <Nav.Link as={Link} to="/products" className="nav-link">Produtos</Nav.Link>
                        <NavDropdown title="Mais" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/" className="nav-dropdown-item">Fique por dentro</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/" className="nav-dropdown-item">Parceiros</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/" className="nav-dropdown-item">Quem Somos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/" className="nav-dropdown-item">Contato</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className="d-flex">
                        <Link to="/" className="text-white me-4">
                            <i className="bi bi-whatsapp"></i>
                        </Link>
                        <Link to="/" className="text-white me-4">
                            <i className="bi bi-instagram"></i>
                        </Link>
                        <Link to="/" className="text-white me-4">
                            <i className="bi bi-facebook"></i>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default Header;
