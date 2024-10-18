import React from 'react';
import { useLayoutEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsWhatsapp, BsInstagram, BsFacebook } from 'react-icons/bs';
import { gsap } from 'gsap';
import logoImage from "../../assets/images/logo.png";
import "./style.css";


function Header() {
    useLayoutEffect(() =>{
        gsap.to(".custom__brand-img",{
            opacity: 1,
            rotate: "0deg",
            duration: 3
        })

        return () => {
            gsap.killTweensOf(".custom__brand-img");
        };
    }, []);

    return (
        <>
        <Navbar expand="md" className="custom-navbar" >
            <Container>
                <Navbar.Brand as={Link} to="/" className="nav-brand">
                <img src={logoImage} className="custom__brand-img" alt='Logo GetWeb' />
                GetWeb</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link as={Link} to="/" className="nav-link">Início</Nav.Link>
                        <Nav.Link as={Link} to="/" className="nav-link">Produtos</Nav.Link>
                        <NavDropdown title="Mais" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/" className="nav-dropdown-item">Fique por dentro</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/" className="nav-dropdown-item">Parceiros</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/" className="nav-dropdown-item">Quem Somos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/" className="nav-dropdown-item">Contato</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Buscar"
                        className="custom-buscar"
                        aria-label="Search"
                        />
                        <Button className='custom-btn'>Buscar</Button>
                    </Form>
                    <div>
                        <Link to="/" className="text-white me-4">
                            <BsWhatsapp />
                        </Link>
                        <Link to="/" className="text-white me-4">
                            <BsInstagram />
                        </Link>
                        <Link to="/" className="text-white me-4">
                            <BsFacebook />
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default Header;
