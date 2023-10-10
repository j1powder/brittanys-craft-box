import React, { useContext, useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import classes from './Layouts.module.css'
import Link from 'next/link';
import { AuthContext } from '@/firebase-helpers/AuthContext';
import Image from 'next/image';
import Logo from '../assets/shoppingcart.png'

const Header = () => {
const {currentUser, signOut} = useContext(AuthContext);
const [cartQuantity, setCartQuantity] = useState();

const total = sessionStorage.getItem('items: ');
const theTotal = JSON.parse(total);
//console.log(theTotal[0])
//console.log(JSON.stringify(theTotal));

    return <>
        <Navbar expand="sm" className={classes.navmenu} >
      <Container fluid>
        <Navbar.Brand href="/">Brittany's Craft Box</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse >
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <Link style={{textDecoration: "none", color: "black", margin: ".5rem"}} href="/">Home</Link>
            <Link style={{textDecoration: "none", color: "black", margin: ".5rem"}} href="/custom-products">Custom Products</Link>
            <Link style={{textDecoration: "none", color: "black", margin: ".5rem"}} href="/about">About</Link>
            <Link style={{textDecoration: "none", color: "black", margin: ".5rem"}} href="contact">Contact Us</Link>
            <Link style={{textDecoration: "none", color: "black", margin: ".5rem"}} href="/store">Store</Link>
            {currentUser && <Link style={{textDecoration: "none", color: "black", margin: ".5rem"}} href="/bcb-admin" >Admin</Link>}

            {currentUser && <Link style={{textDecoration: "none", color: "black", margin: ".5rem"}} href="/" onClick={signOut}>Sign Out</Link>}
            
          </Nav>
          
        </Navbar.Collapse>
        <span>Checkout {theTotal && theTotal.length}</span>
        
        <Image className={classes.logo} src={Logo} alt='cart logo' />
      </Container>
    </Navbar>
    </>
}

export default Header;