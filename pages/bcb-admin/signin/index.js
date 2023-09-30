import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import classes from '../../../styles/Admin.module.css'
import { projectFirestore, projectStorage } from '@/firebaseConfig'


const SignIn = () => {
  return <>
    
    <br/>
    <Container>

    
    <Card className={classes.logincard}>
        <Row>

        <Col md={12}>
        <h2>Sign In To Add Product</h2>
        <Form>
          <Form.Group>
            <Form.Control className={classes.input} type="email" placeholder='Email' />
            <Form.Control className={classes.input} type="password" placeholder='Password' />
            
            </Form.Group> 
            <br/>
         <Button>Login</Button> 
         
         
        </Form>
        </Col>
        </Row>
    </Card>
    </Container>
    </>
}

export default SignIn;