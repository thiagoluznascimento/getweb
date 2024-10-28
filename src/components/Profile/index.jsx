import React from 'react'
import imagem1 from "../../assets/profiles/thiago.jpeg";
import imagem2 from "../../assets/profiles/murillo.jpeg";
import './styles.css'
import { Col, Container, Row } from 'react-bootstrap';


const user = {
    name1: "Thiago Luz",
    name2: "Murillo Silva",
    imageUrl: imagem1,
    imageUrl2: imagem2,
};

function Profile() {

  return (
    <>
    <Container>
      <Row className="custom-row">
      <h2>Especialistas</h2>
      <div class="main">
        <Col className='col-custom'>
        <div class="rounding-sec">
                <div class="big-circle">
                    <div class="icon-block">
                        <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
                            alt="" />
                    </div>
                    <div class="icon-block">
                       <img src="https://img.icons8.com/?size=100&id=79904&format=png&color=000000"
                            alt="" />
                    </div>
                    <div class="icon-block">
                        <img src="https://img.icons8.com/?size=100&id=11625&format=png&color=000000"
                            alt="" />
                    </div>
                    <div class="icon-block">
                        <img src="https://img.icons8.com/?size=50&id=114956&format=png" alt="" />
                    </div>
                </div>
                <div class="images">
                  <img className='avatar'src={user.imageUrl2} alt={'foto de ' + user.name2}/>
                </div>
        </div>
        <Col>
          <h2>Murillo Silva</h2>
          <p className='p-especialista'>Desenvolvedor FullStack e Bacharel em Sistemas de Informação pelo IFNMG</p>
        </Col>
        </Col>

        <Col className='col-custom'>
        <div class="rounding-sec">
                <div class="big-circle">
                    <div class="icon-block">
                        <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
                            alt="" />
                    </div>
                    <div class="icon-block">
                       <img src="https://img.icons8.com/?size=100&id=1046&format=png&color=000000"
                            alt="" />
                    </div>
                    <div class="icon-block">
                        <img src="https://img.icons8.com/?size=100&id=11625&format=png&color=000000"
                            alt="" />
                    </div>
                    <div class="icon-block">
                        <img src="https://img.icons8.com/?size=100&id=35989&format=png&color=000000" alt="" />
                    </div>
                </div>
                <div class="images">
                  <img className='avatar'src={user.imageUrl} alt={'foto de ' + user.name1}/>
                </div>
        </div>
        <Col>
          <h2>Thiago Luz</h2>
          <p className='p-especialista'>Desenvolvedor FullStack e Bacharel em Sistemas de Informação pelo IFNMG</p>
        </Col>
        </Col>
      </div>
      </Row>
    </Container>
    </>
  )
}


export default Profile;