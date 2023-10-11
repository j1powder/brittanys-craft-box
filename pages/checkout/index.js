
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
import Card from 'react-bootstrap/Card'
import Footer from '@/layout/Footer'
import { PaymentForm } from 'react-square-web-payments-sdk'
import { CreditCard } from 'react-square-web-payments-sdk'
import classes from './Checkout.module.css'




const CheckoutPage = () => {
  const items = sessionStorage.getItem('items: ')
  const myItems = JSON.parse(items);


const total = sessionStorage.getItem('items: ');
const theTotal = JSON.parse(total);
//console.log(theTotal[0])
//console.log(theTotal);
let grandTotal = 0;
if(theTotal){
  theTotal.map((item)=>{
  grandTotal = Math.round((grandTotal + item.price + Number.EPSILON)*100)/100;
  console.log(grandTotal)
  });
}




  return     <> 
                <Header/>
                <Container>
                    <Row>
                        <Col md={12}>
                            <br/>
                <h3>Complete Your Transaction</h3>
                <h5>Included in your cart today:</h5>
                <Card className={classes.card}>
                {theTotal && theTotal.map((item)=>{
                  return <>
                        <Container className={classes.container}>
                         <Row> 
                          <Col md={12}>
                        <div><b>Item:</b> {item.product}</div>
                        <div><b>Quantity:</b> {item.amount}</div>
                        <div><b>Total Price:</b> {item.price}</div>
                        </Col>
                        
                        </Row>
                        </Container>
                        <br/>
                        </>
                })}
                <div style={{margin:" 0rem 2rem"}}><b>Grand Total: </b>{grandTotal}</div>
                </Card>
                <div className={classes.creditcard}>
       <PaymentForm
        applicationId="sandbox-sq0idb-D6XCRTcgh08X75BRi98qdQ"
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
          const response = await fetch('/api/pay', {
            method: 'POST',
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              sourceId: token.token,
            }),
          });
          console.log('token:', token);
          console.log('verifiedBuyer:', verifiedBuyer);
          console.log(await response.json());
        }}
        locationId='LX37VH0JEEPDS'
      >
        { <CreditCard/> }
      </PaymentForm> 
    </div>

            </Col>
            </Row>
            </Container>
            <br/>
                <Footer/>
            </>
  
}

export default CheckoutPage