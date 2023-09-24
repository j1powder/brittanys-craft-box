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
import farmersmarket from '../../assets/atthefarmersmarket.jpg'

const About = () => {
  return <>
    <Header/>
    <main className={classes.page}>
        <Container >
                <Row style={{padding:"1rem 0rem"}}>
                <Col md={6}>
                    <h1 className={classes.headline}>How Brittany's Craft Box Started</h1>
                    <p>"I started Brittany’s Craft Box about a year ago. I’ve always enjoyed making new crafts. I would see things and challenge myself to make them and learn a new skill. I started the business when someone asked me to make something as a gift. From there, it took on a life of it’s own. And while I do this part-time to supplement my full-time job, this is truly where my heart and passion lie"</p>
                    <p className={classes.ownerComment}><span style={{fontWeight: 'bold'}}>Brittany Salaiz</span><br/>-Owner-Brittany's Craft Box</p>
                </Col>
                <Col md={6}>
                    <Image className={classes.aboutimage} src={farmersmarket} alt="farmers market" />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={2}></Col>
                <Col md={10} >
                     
                <ElfsightWidget widgetId="b8e650a2-6f61-4073-87b5-3bc94816b603" />
                
                </Col>
            </Row>
            <br/>
        </Container>
    </main>
    <Footer/>
  </>
}

export default About;