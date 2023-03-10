import React from 'react'
import { Col, Row } from 'antd';
import { Container } from '@mui/material';
import './footer.css'
import logo from '../../assets/logo.png'

function Footer() {
  return (
    <div className='footer'>
        <Container>
            {/* Footer created using ant dsign grid system */}
    <Row>
        <Col className='row' span={6}>
           <h3 className='footer_title'>Company</h3>
           <a>About Us</a><br/>
           <a>Services</a><br/>
           <a>Career</a><br/>
           <a>Latest News</a>
        </Col>

        <Col className='row' span={6}>
        <h3 className='footer_title'>Services</h3>
           <a>Social Responsibility</a><br/>
           <a>Privacy Policy</a><br/>
           <a>Terms & Conditions</a><br/>
           <a>Contact us</a>           
        </Col>
        <Col className='row' span={6}>
            <h3 className='footer_title'> Adress </h3>
            <p>Savarkar Nagar, Pdharpur<br>
            </br>
            Email:contact@rptechnovelty@gmail.com<br/>
            Phone: +919172912322
            </p>
        </Col >
        <Col className='row' span={6}>
           <img src={logo}/><br></br>
           <h4> Follow us on</h4>
        </Col>
    </Row>

    <p className="footer_text">
        2019-2024 Redphantom Tech Novelty Private Limited. All Rights Reserved.
    </p>
        </Container>
    </div>
  )
}

export default Footer