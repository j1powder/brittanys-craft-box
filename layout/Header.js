import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import classes from './Layouts.module.css'
import Link from 'next/link';

const Header = () => {

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
            <Link style={{textDecoration: "none", color: "black", margin: ".5rem"}} href="contact">Contact</Link>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
}

export default Header;