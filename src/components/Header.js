import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
function Header() {
    return (
        
    <section className="container">
      <h1 className="h1 mb-4">Daze Solutions</h1>
    
    <ReactBootStrap.Navbar bg="dark" variant="dark">
    <ReactBootStrap.Nav className="mr-auto">
    <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Form inline>
    <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <ReactBootStrap.Button variant="outline-info">Search</ReactBootStrap.Button>
    </ReactBootStrap.Form>
    </ReactBootStrap.Navbar>
    </section>
    )
}

export default Header
