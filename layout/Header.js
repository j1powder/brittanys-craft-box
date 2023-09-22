import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import classes from './Layouts.module.css'

const Header = () => {

    return <>
        <Navbar expand="sm" className={classes.navmenu} >
      <Container fluid>
        <Navbar.Brand href="/">Brittany's Craft Box</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/custom-products">Products</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
}

export default Header;