import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./styles.css"


function Footer() {
  return (
      <footer>
        <hr class="custom-hr" />
        <Container>
            <Row>
                <Col md={3}>
                <h5>GetWeb</h5>
                <div className="custom-p">
                    <p>Endereço: Rua E, 986 <br />
                     - Santos Dumont, Minas Gerais,<br />
                    CEP - 39270-000 - MG<br />
                    (38)984068176
                    </p>
                </div>
                </Col>
                <Col md={3}>
                    <h5>Links úteis</h5>
                    <ul className="list-unstyled">
                        <li><Link as={Link} to="/" >Início</Link></li>
                        <li><Link as={Link} to="/products" >Produtos</Link></li>
                        <li><Link as={Link} to="/contact" >Contato</Link></li>
                    </ul>
                </Col>
                <Col md={3}>
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
                <Col md={3}>
                    <h5>Localização</h5>
                    <iframe
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60935.714552369485!2d-44.96118740713735!3d-17.34051690438558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa0b7aa61b41d3%3A0xb54948d78e00fc4!2sPirapora%2C%20MG%2C%2039270-000!5e0!3m2!1spt-BR!2sbr!4v1729262168395!5m2!1spt-BR!2sbr"
                         width="100%" height="200" style={{border:0, borderRadius:9}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer