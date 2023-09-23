import React from 'react'
import classes from './Layouts.module.css'
import  Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  return <>
        <Container fluid className={classes.footer}>
            <Row>
                <Col md={6}>
                <div >Contact us<br/>575-640-8747<br/>frombrittscrafts@gmail.com</div>
                </Col>
                <Col md={6}>
                    <div><br/>Copyright 2023 &copy; | Brittany's Craft Box</div>
                </Col>
            </Row>

        </Container>
        
  </>
}

export default Footer;