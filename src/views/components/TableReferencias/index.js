import React from "react";

import { Table, Button } from 'react-bootstrap'

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
              onClick={props.onClick}>Adicionar
            </Button>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.lista.map(x => (
          <tr key={x.id}>
            <td>{x.id}</td>
            <td>{x.nome}</td>
            <td>{x.telefone}</td>
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