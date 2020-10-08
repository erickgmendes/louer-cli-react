import React from 'react';

const TableReferencias = props => (
  <table className="table table-striped table-hover table-sm">
    <thead>
      <tr>
        <th style={{ width: 40 }}>#</th>
        <th>Nome da Referência</th>
        <th>Telefone da Referência</th>
        <th style={{ width: 100 }}>
          <button
            className="btn btn-outline-primary btn-sm btn-block"
            onClick={props.onClickOpenModal}
          >Adicionar</button>
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
            <button
              className="btn btn-outline-danger btn-sm btn-block"
              value={x.id}
              onClick={props.onClickExcluir}
            >Excluir</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default TableReferencias