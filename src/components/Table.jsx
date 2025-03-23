import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'; 
import Container from 'react-bootstrap/Container';
export default function Table() {
  return (
    <div>
        <Navbar className="bg-body-tertiary " style={{padding:"10px"}}>
      <Container>
        <Navbar.Brand href="#teammates">teammates</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             <a href="#assinges converstion"style={{padding:"10px"}}>assinges converstion</a>
          </Navbar.Text>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             <a href="#close converstion">close converstion</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
