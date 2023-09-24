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
import lascruces from '../../assets/LasCrucesView.jpg'

const Contact = () => {
  
  
  return <>
  <Header/>
  <main className={classes.page}>
<Container>
    <Row>
        <Col md={12}>
            <Image className={classes.contactimage} src={farmermarket2} />
        </Col>
    </Row>
    <Row>
      <Col md={12}>
        <h2 className={classes.contactpage}>Brittany's Craft Box</h2>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <h2 className={classes.contactpage}>575-640-8747</h2>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <h2 className={classes.contactpage}>frombrittscrafts@gmail.com</h2>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <h2 className={classes.contactpage}>Located in Las Cruces, NM</h2>
      </Col>
    </Row>
    <Row>
        <Col md={12}>
            <Image className={classes.contactimage} src={lascruces} />
        </Col>
    </Row>
    <Row>
      <Col md={12}>
        <h2 className={classes.contactpage}>Find us on social media</h2>
      </Col>
    </Row>
    
</Container>
  </main>
  <Footer/>

  </>
}

export default Contact;