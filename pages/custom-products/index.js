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
    

    <Container>
        <Row>
            <Col md={12}>
            <h1 className={classes.headline}>Latest Creations</h1>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
            <ElfsightWidget widgetId="e4fce015-5de8-40d7-a5cd-d559b83da092" />
            <br/>
                
            </Col>
        </Row>
        <Row>
            <Col md={6} style={{padding: "0rem .5rem"}}>
                <ReactPlayer url={video} loop playing={true} controls  />
                <br/>
                <br/>
            </Col>

            <Col md={6} style={{padding: "0rem .5rem"}}>
                <ReactPlayer url={video2} loop playing={true} controls />
                <br/>
                <br/>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <h1 className={classes.headline}>Custom Made Creations Perfect for Halloween</h1>
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
                <h1 className={classes.headline}>Christmas Time Collection</h1>
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
                <h1 className={classes.headline}>Great for any Occasion</h1>
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
            <h1 className={classes.headline}>Call and Place Your Order Today!</h1>
            </Col>
        </Row>

        <Row>
            <Col md={12}>
            <Button className={classes.bottombtn}>Call and Place Your Order Today!</Button>
            </Col>
        </Row> 
    </Container>
    <Footer/>

    </>

  

}

export default index