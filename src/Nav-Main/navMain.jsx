import React from 'react'
import {Navbar,Nav, Container} from 'react-bootstrap'
import './navMain.css'

export default function NavMain() {
 return (
    <>
        <Navbar bg="primary" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand href="/">Frontend-Website </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href='/home'>Home</Nav.Link>
                    <Nav.Link href='/about'>About</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}
