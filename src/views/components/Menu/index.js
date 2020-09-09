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
          <Nav.Link as={Link} to="/">Home</Nav.Link>

          <NavDropdown title="Clientes">
            <NavDropdown.Item><Nav.Link as={Link} to="/clientesGerenciar">Gerenciar</Nav.Link></NavDropdown.Item>
            <NavDropdown.Item><Nav.Link as={Link} to="/clientesEditar">Editar</Nav.Link></NavDropdown.Item>
          </NavDropdown>

          <Nav.Link><Link to="/sobre">Sobre</Link></Nav.Link>

          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item><Nav.Link as={Link} to="/clientesGerenciar">Action</Nav.Link></NavDropdown.Item>
            <NavDropdown.Item><Nav.Link as={Link} to="/clientesGerenciar">Another action</Nav.Link></NavDropdown.Item>
            <NavDropdown.Item><Nav.Link as={Link} to="/clientesGerenciar">Something</Nav.Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item><Nav.Link as={Link} to="/clientesGerenciar">Separated link</Nav.Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" size="sm" placeholder="Busca" className="mr-sm-2" />
          <Button variant="outline-success" size="sm">Busca</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </>
export default Menu