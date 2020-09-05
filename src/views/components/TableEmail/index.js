import React from "react";

import { Table, Button } from 'react-bootstrap'

const TableEmail = props => (
  <>
    <h6>E-mails</h6>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Endereço</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {props.lista.map(x => (
          <tr>
            <td>{x.id}</td>
            <td>{x.endereco}</td>
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

export default TableEmail