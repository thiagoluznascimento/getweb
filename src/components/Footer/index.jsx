import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer>
        <Container>
            <Row>
                <Col md={4}>
                <h5>GetWeb</h5>
                <div>
                    <p>Endereço: R. E, <br />
                    986 - Santos Dumont, Minas Gerais,<br />
                    CEP - 39270-000 - MG<br />
                    (38)984068176
                    </p>
                </div>
                </Col>
                <Col md={4}>
                    <h5>Links úteis</h5>
                    <ul className="list-unstyled">
                        <li><Link as={Link} to="/" >Início</Link></li>
                        <li><Link as={Link} to="/products" >Produtos</Link></li>
                        <li><Link as={Link} to="/contact" >Contato</Link></li>
                    </ul>
                </Col>
                <Col md={4}>
                    <h5>Contato</h5>
                    <Link to="/" className='d-block mb-2' >
                        <i className="bi bi-whatsapp"></i> WhatsApp
                    </Link>
                    <Link to="/" className='d-block mb-2' >
                        <i className="bi bi-instagram"></i> Instagram
                    </Link>
                    <Link to="/" className='d-block mb-2'>
                        <i className="bi bi-envelope"></i> Email
                    </Link>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer