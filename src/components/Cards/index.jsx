import React from 'react'
import { Button, Card, CardBody, CardGroup, Col, Container, Row } from 'react-bootstrap';
import './styles.css'


function Cards() {
  return (
    <>
    <Container>
        <CardGroup className='card-group-custom'>
            <Card className='card-custom'>
                <CardBody>
                <div class="icon__circle icon__circle--green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tablet">
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                </div>
                    <Card.Title>Responsivo</Card.Title>
                    <Card.Text className='card-text'>
                        A responsividade é a capacidade de um site se adaptar a diferentes tamanhos de tela. Ela utiliza técnicas como media queries e flexbox para reorganizar o conteúdo. Isso garante uma experiência agradável, independentemente do dispositivo. Um design responsivo é essencial para acessibilidade e satisfação do usuário.
                    </Card.Text>
                </CardBody>
            </Card>
            <Card className='card-custom'>
                <CardBody>
                    <div class="icon__circle icon__circle--purple">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                    </div>
                    <Card.Title>Moderno</Card.Title>
                    <Card.Text>
                        O design moderno é caracterizado por linhas limpas e uso eficiente do espaço. Foca na funcionalidade e estética, utilizando uma paleta de cores minimalista. A tipografia é ousada, facilitando a leitura e a usabilidade. Esse estilo é essencial para criar interfaces atraentes e intuitivas.
                    </Card.Text>
                </CardBody>
            </Card>

            <Card className='card-custom'>
                <CardBody>
                    <div class="icon__circle icon__circle--red">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    </div>
                    <Card.Title>Design Limpo</Card.Title>
                    <Card.Text>
                        Um design limpo é sinônimo de clareza e simplicidade, focando na experiência do usuário. Utiliza áreas em branco para facilitar a navegação, evitando sobrecargas visuais. Elementos como botões e ícones são apresentados de forma clara. Isso garante uma jornada mais satisfatória para os usuários.
                    </Card.Text>
                </CardBody>
            </Card>
        </CardGroup>
    </Container>
    </>
  )
}

export default Cards;