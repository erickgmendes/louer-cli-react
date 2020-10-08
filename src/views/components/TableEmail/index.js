import React, { Component } from 'react';

class TableEmail extends Component {

  render() {
    let index = 0
    return (
      <form onSubmit={this.props.onClickGravar}>
        <table className="table table-striped table-hover table-sm">
          <thead className="thead-light">
            <tr>
              <th style={{ width: 40 }}>#</th>
              <th>Endereço do E-mail</th>
              <th style={{ width: 100 }}>
                {this.props.modoEdicao
                  ?
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm btn-block"
                    onClick={this.props.onClickCancelar}
                  >Cancelar</button>
                  :
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm btn-block"
                    onClick={this.props.onClickAdicionar}
                  >Adicionar</button>
                }
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.modoEdicao &&
              <tr key={++index}>
                <td>{index}</td>
                <td>
                  <div className="form-group">
                    <input className="form-control form-control-sm"
                      type="text"
                      autocomplete="off"
                      name="enderecoEmail"
                      defaultValue={this.props.value}
                    />
                  </div>
                </td>
                <td>
                  <button
                    type="submit"
                    className="btn btn-outline-success btn-sm btn-block"
                    value={index}
                  >Gravar</button>
                </td>
              </tr>
            }
            {this.props.lista.map(x => (
              <tr key={++index}>
                <td>{index}</td>
                <td>{x.enderecoEmail}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm btn-block"
                    value={index}
                    onClick={this.props.onClickExcluir}
                  >Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table >
      </form>
    )
  }
}

export default TableEmail