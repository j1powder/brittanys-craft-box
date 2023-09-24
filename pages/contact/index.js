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
import fbook from '../../assets/403-4038633_fb-facebook-hd-png-download.png'
import igram from '../../assets/Instagram_logo_2022.svg.png'

const Contact = () => {
  
  
  return <>
  <Header/>
  <main className={classes.page}>
<Container>
  <br/>
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
        <h2 className={classes.findus} >Find us on social media</h2>
      </Col>
    </Row>
    <Row>
    <Col  md={12}>
          <section className={classes.mediacontainer}>
          <Image className={classes.socmedia} src={fbook} alt='facebook' />
          <Image className={classes.socmedia} src={igram} alt='instagram' />
          </section>
        </Col>
    </Row>
    <br/>
    <br/>
    <Row>
      <Col md={12}>
      <ElfsightWidget widgetId="fde6d531-3570-4d24-a347-a93d09e21f52" />
      </Col>
    </Row>
<br/>
</Container>
  </main>
  <Footer/>

  </>
}

export default Contact;