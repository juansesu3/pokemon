import React from 'react'
import { Button, Container, Form, FormControl, Nav,  Navbar,  NavDropdown, } from 'react-bootstrap'
import '../styles/Navbaaar.css'

const Navbaaar = () => {
    return (
        <div>
            <Navbar className='nav'  fixed="top" bg="light" expand="lg">
  <Container fluid>
  {/* <img className='logo-pokemon' src='https://res.cloudinary.com/dv08oqgvx/image/upload/v1642051451/AmazonasSprint3/c09ancudodjz6kzrydy2.png'/> */}
    <Navbar.Brand href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Agua</Nav.Link>
        <Nav.Link href="#action2">Fuego</Nav.Link>
        <Nav.Link href="#action1">Aire</Nav.Link>
        <Nav.Link href="#action2">Tierra</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navbaaar
