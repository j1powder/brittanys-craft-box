import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import classes from '../../styles/Admin.module.css'
import { projectFirestore, projectStorage } from '@/firebaseConfig'

const Admin = () => {
  
  const AddProduct = () => {



  }
  return <>
        


        <Container>
          <Row>
            <Col md={12}>
              <div className={classes.divcontainer}>
              <h2>Add New Product</h2>
            <Form>
              <Form.Group>
                <Form.Control className={classes.addpicform} type="email" placeholder='Caption' />
                <Form.Control className={classes.addpicform} type="password" placeholder='Price' />
                <Form.Control className={classes.addpicform} placeholder="Product Name" />
                </Form.Group> 
                <br/>
             <Button>Add Product</Button> 
             
             
            </Form>
            </div>
            </Col>
          </Row>

        </Container>
        </>
}

export default Admin;
