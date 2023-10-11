
import React, { useState, useEffect } from 'react'
import Header from '@/layout/Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { ElfsightWidget } from 'react-elfsight-widget';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert';
import Footer from '@/layout/Footer'
import { PaymentForm } from 'react-square-web-payments-sdk'
import { CreditCard } from 'react-square-web-payments-sdk'
import classes from '../../styles/Admin.module.css'



const CheckoutPage = () => {
  
  
  return     <> 
                <Header/>
                <Container>
                    <Row>
                        <Col md={12}>
                            <br/>
                <h3>This is the Checkout Page</h3>
                <div className={classes.container}>
      <PaymentForm
        applicationId="sandbox-sq0idb-D6XCRTcgh08X75BRi98qdQ"
        cardTokenizeResponseReceived={(token, verifiedBuyer) => {
          console.log('token:', token);
          console.log('verifiedBuyer:', verifiedBuyer);
        }}
        locationId='LX37VH0JEEPDS'
      >
        { <CreditCard/> }
      </PaymentForm>
    </div>



                <Form >
              <Form.Group>
                <Form.Control className={classes.addpicform} type="text" placeholder='Caption' />
                <Form.Control  className={classes.addpicform} type="number" placeholder='Price' />
                <Form.Control  className={classes.addpicform} placeholder="Product Name" />
                </Form.Group> 
                <br/>
                
                <br/><br/>
                <Button type="submit">Add Product</Button> 
             
             
            </Form>
            </Col>
            </Row>
            </Container>
            <br/>
                <Footer/>
            </>
  
}

export default CheckoutPage