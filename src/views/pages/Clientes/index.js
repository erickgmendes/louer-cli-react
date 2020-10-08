import React, { Component } from 'react';

export default class Clientes extends Component {

  render() {
    return (
      <div class="container">
        <h5>Clientes</h5>
        <hr />
        <table className="table table-striped table-hover table-sm">
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th>Coluna</th>
              <th>Outra coluna</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Valor 1 Coluna 1</td>
              <td>Valor 1 Coluna 2</td>
              <td>Valor 1 Coluna 3</td>
            </tr>
            <tr>
              <td>Valor 2 Coluna 1</td>
              <td>Valor 2 Coluna 2</td>
              <td>Valor 2 Coluna 3</td>
            </tr>
            <tr>
              <td>Valor 3 Coluna 1</td>
              <td>Valor 3 Coluna 2</td>
              <td>Valor 3 Coluna 3</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}