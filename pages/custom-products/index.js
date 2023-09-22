import React from 'react'
import Header from '@/layout/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ElfsightWidget } from 'react-elfsight-widget';

import classes from '../../styles/Products.module.css';

const index = () => {
  
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
            </Col>
        </Row>
        <Row>
            <Col md={12}>
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
    </Container>


    </>

  

}

export default index