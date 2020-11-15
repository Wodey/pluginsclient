import React from 'react';
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";


export default ({bluertime}) => {
  return (
    <Navbar bg="light" className="justify-content-center ">
      <Navbar.Brand href="#home"><img src="logo.jpeg" width="50" height="50" className="d-inline-block align-top" alt="Company Logo"/></Navbar.Brand>
      <Nav activeKey="/home" className="w-50 justify-content-around"> 
        <Nav.Item>
          <Nav.Link className="py-2 d-none d-md-inline-block" href="#home" onSelect={(selectedKey) => console.log(selectedKey)}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="py-2 d-none d-md-inline-block" href="#tour">Tour</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link className="py-2 d-none d-md-inline-block" href="#features">Features</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="py-2 d-none d-md-inline-block" href="#pricing">Pricing</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link variant="light" className="py-2 d-none d-md-inline-block" href="#support">Support</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="py-2 d-none d-md-inline-block" href="#cart">Cart</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}
