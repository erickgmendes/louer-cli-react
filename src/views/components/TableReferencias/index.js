import React from "react";

import { Table, Button, Modal, Form, Row, Col } from 'react-bootstrap'

const TableReferencias = props => (
  <>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th style={{ width: 40 }}>#</th>
          <th>Nome da Referência</th>
          <th>Telefone da Referência</th>
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
                <Modal.Title>Adicionar Pessoa de Referência</Modal.Title>
              </Modal.Header>
              <Form onSubmit={props.onFormSubmit}>
                <Modal.Body>
                  <Row>
                    <Col style={{ width: 40 }}>
                      <Form.Group>
                        <Form.Label>Nome da Referência</Form.Label>
                        <Form.Control
                          type="text"
                          size="sm"
                          name="nomeReferencia"
                          placeholder="Informe o nome da Referência"
                        />
                      </Form.Group>
                    </Col>                    
                    <Col>
                      <Form.Group>
                        <Form.Label>Telefone da Referência</Form.Label>
                        <Form.Control
                          type="text"
                          size="sm"
                          name="telefoneReferencia"
                          placeholder="Informe o número do telefone da Referência"
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
                    Adicionar Referência
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
            <td>{x.nomeReferencia}</td>
            <td>{x.telefoneReferencia}</td>
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

export default TableReferencias