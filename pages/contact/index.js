import React from 'react'
import Header from '@/layout/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { ElfsightWidget } from 'react-elfsight-widget';
import Footer from '@/layout/Footer'
import classes from '../../styles/Products.module.css'
import Image from 'next/image'
import farmermarket2 from '../../assets/farmersmarketpic1.jpg';


const Contact = () => {
  
  
  return <>
  <Header/>
  <main>
<Container>
    <Row>
        <Col md={12}>
            <Image className={classes.contactimage} src={farmermarket2} />
        </Col>
    </Row>
    
</Container>
  </main>
  <Footer/>

  </>
}

export default Contact;