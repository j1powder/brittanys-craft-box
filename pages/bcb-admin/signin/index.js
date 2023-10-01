import React, {useState, useContext} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import classes from '../../../styles/Admin.module.css'
import { projectFirestore, projectStorage } from '@/firebaseConfig'
import { AuthContext } from '@/firebase-helpers/AuthContext'

import { useRouter } from 'next/router'


const SignIn = () => {
  const {currentUser, signIn, signOut} = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  
  const handleLogin = async (e) => {
    e.preventDefault()
    
    try {
      const user = await signIn(email, password);
      console.log('Logged in user:', currentUser);
      // Redirect or handle successful login
      setEmail('');
      setPassword('');
      
      router.push('/bcb-admin')
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle error
    }
  }
  
  return <>
    
    <br/>
    <Container>

    
    <Card className={classes.logincard}>
        <Row>

        <Col md={12}>
        <h2>Sign In To Add Product</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group>
            <Form.Control onChange={(e)=> setEmail(e.target.value)} className={classes.input} type="email" placeholder='Email' />
            <Form.Control onChange={(e)=> setPassword(e.target.value)} className={classes.input} type="password" placeholder='Password' />
            
            </Form.Group> 
            <br/>
         <Button type='submit'>Login</Button> 
         
         
        </Form>
        </Col>
        </Row>
    </Card>
    </Container>
    </>
}

export default SignIn;