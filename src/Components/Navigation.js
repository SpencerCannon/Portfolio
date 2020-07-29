import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

function Navigation(){
    return (
    
        <Navbar collapseOnSelect expand=" " bg="dark" variant="dark">
            <Navbar.Brand href="/">Spencer's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About Me</Nav.Link>
                    <Nav.Link href="/Projects">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
         </Navbar>
    )
}

export default Navigation;