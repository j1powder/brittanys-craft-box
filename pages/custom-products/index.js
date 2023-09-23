import React from 'react'
import Header from '@/layout/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { ElfsightWidget } from 'react-elfsight-widget';
import Footer from '@/layout/Footer'
import ReactPlayer from 'react-player'
//import video1 from '../../public/videos/video-foolish-mortal.mp4'

import classes from '../../styles/Products.module.css';

const index = () => {
  const video = './videos/video-foolish-mortal.mp4';
  const video2 = './videos/video-july4-cup.mp4';

return <>
    <Header /> 
    
    <main className={classes.page}>
    <Container >
        <Row>
            <Col md={12}>
                <h1 className={classes.headline}>Check out all of our latest custom products</h1>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
            <h2 className={classes.headline}>Latest Creations</h2>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
            <ElfsightWidget widgetId="e4fce015-5de8-40d7-a5cd-d559b83da092" />
            <br/>
                
            </Col>
        </Row>
        <Row style={{margin: "0rem 1rem"}}>
            <Col md={4} style={{padding: "0rem .5rem"}}>
               {/*  <ReactPlayer url={video} loop playing={true} controls  /> */}
                <video className={classes.video} loop autoPlay controls>
                    <source src={video} type="video/mp4" />
                </video>
                <br/>
                <br/>
            </Col>

            <Col md={4} style={{padding: "0rem .5rem"}}>
            <video className={classes.video} loop autoPlay controls>
                    <source src={video2} type="video/mp4" />
                </video>
                <br/>
                <br/>
            </Col>
            <Col md={4}></Col>
        </Row>
        <Row>
            <Col md={12}>
                <h2 className={classes.headline}>Custom Made Creations Perfect for Halloween</h2>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
            <ElfsightWidget widgetId="52a6b50a-27ef-4619-9e6a-8541f3d68ef5" />
            <br/>
                <br/>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <h2 className={classes.headline}>Christmas Time Collection</h2>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
            <ElfsightWidget widgetId="d71f64c6-9afb-48fc-b2dc-72367af6dd16" />
            <br/>
                <br/>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <h2 className={classes.headline}>Great for any Occasion</h2>
            </Col>
        </Row>

         <Row>
            <Col md={12}>
            <ElfsightWidget widgetId="6d1b87fa-0f66-453c-81f0-a7a25be4ab19" />
            <br/>
            </Col>
        </Row>

        <Row>
            <Col md={12}>
            <h2 className={classes.headline}>Call and Place Your Order Today!</h2>
            </Col>
        </Row>

        <Row>
            <Col md={12}>
            <a style={{textDecoration: "none"}} href="tel:5756408747"><Button className={classes.bottombtn}>Call and Place Your Order Today!</Button></a>
            </Col>
        </Row> 
    </Container>
    </main>
    <Footer/>

    </>

  

}

export default index