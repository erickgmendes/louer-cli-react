import React from "react";

import { Table, Button } from 'react-bootstrap'

const TableTelefone = props => (
  <>
    <h6>Telefones</h6>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>DDD</th>
          <th>Tipo</th>
          <th>Número</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {props.lista.map(x => (
          <tr>
            <td>{x.id}</td>
            <td>{x.ddd}</td>
            <td>{x.tipo}</td>
            <td>{x.numero}</td>
            <td>
              <Button
                variant="outline-dark"
                size="sm"
                value={x.id}
                onClick={props.onClick}><img src=""></img>Excluir
              </Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>
)

export default TableTelefone