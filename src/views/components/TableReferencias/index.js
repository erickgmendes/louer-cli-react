import React from "react";

import { Table, Button } from 'react-bootstrap'

const TableReferencias = props => (
  <>
    <h6>Referências</h6>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {props.lista.map(x => (
          <tr>
            <td>{x.id}</td>
            <td>{x.nome}</td>
            <td>{x.telefone}</td>
            <td>
              <Button
                variant="outline-dark"
                size="sm"
                value={x.id}
                onClick={props.onClick}>Excluir
              </Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>
)

export default TableReferencias