import React from "react"

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const Menu = props =>
  <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Louer Web</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>

          <NavDropdown title="Clientes">
            <NavDropdown.Item><Link to="/clientesGerenciar">Gerenciar</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/clientesEditar">Editar</Link></NavDropdown.Item>
          </NavDropdown>

          <Nav.Link><Link to="/sobre">Sobre</Link></Nav.Link>

          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Busca" className="mr-sm-2" />
          <Button variant="outline-success">Busca</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    <br />
  </>
export default Menu