import React from "react";

import { Table, Button, Modal, Form, Row, Col } from 'react-bootstrap'

const TableTelefone = props => (

  <>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th style={{ width: 40 }}>#</th>
          <th style={{ width: 50 }}>DDD</th>
          <th>Tipo de Telefone</th>
          <th>Número do Telefone</th>
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
                <Modal.Title>Adicionar Telefone</Modal.Title>
              </Modal.Header>
              <Form onSubmit={props.onFormSubmit}>
                <Modal.Body>
                  <Row>
                    <Col style={{ width: 40 }}>
                      <Form.Group>
                        <Form.Label>DDD</Form.Label>
                        <Form.Control
                          type="text"
                          name="ddd"
                          placeholder="Informe o DDD"
                          defaultValue={props.inscricao}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control
                          type="text"
                          name="tipo"
                          placeholder="Informe o tipo do telefone"
                          defaultValue={props.inscricao}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Número</Form.Label>
                        <Form.Control
                          type="text"
                          name="numero"
                          placeholder="Informe o número do telefone"
                          defaultValue={props.inscricao}
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
                    Adicionar Telefone
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
            <td>{x.ddd}</td>
            <td>{x.tipo}</td>
            <td>{x.numero}</td>
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

export default TableTelefone