import React from "react";

import { Table, Button, Modal, Form, Row, Col } from 'react-bootstrap'

const TableEmail = props => (
  <>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th style={{ width: 40 }}>#</th>
          <th>Endereço do E-mail</th>
          <th style={{ width: 100 }}>
            <Button
              style={{ width: 100 }}
              variant="outline-primary"
              size="sm"
              onClick={props.onClickOpenModal}>Adicionar
            </Button>

            <Modal
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={props.showModal}
              onHide={props.onClickCloseModal}
            >
              <Modal.Header closeButton>
                <Modal.Title>Adicionar E-mail</Modal.Title>
              </Modal.Header>
              <Form onSubmit={props.onFormSubmit}>
                <Modal.Body>
                  <Row>
                    <Col style={{ width: 40 }}>
                      <Form.Group>
                        <Form.Label>Endereço do E-mail</Form.Label>
                        <Form.Control
                          type="text"
                          size="sm"
                          name="enderecoEmail"
                          placeholder="Informe o endereço do e-mail"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    type="submit"
                    typevariant="outline-primary"
                  >
                    Adicionar E-mail
                  </Button>
                  <Button variant="outline-secondary" onClick={props.onClickCloseModal}>
                    Fechar
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.lista.map(x => (
          <tr key={x.id}>
            <td>{x.id}</td>
            <td>{x.enderecoEmail}</td>
            <td>
              <Button
                style={{ width: 100 }}
                variant="outline-danger"
                size="sm"
                value={x.id}
                onClick={props.onClickExcluir}>Excluir
              </Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>
)

export default TableEmail