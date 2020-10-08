import React from 'react';

const TableTelefone = props => (
  <>
    <div className="row">
      <div className="col col-sm-2">
        #
      </div>
      <div className="col">
        DDD
      </div>
      <div className="col">
        Tipo de Telefone
      </div>
      <div className="col">
        Número do Telefone
      </div>
      <div className="col col-sm-2">
        <button
          className="btn btn-outline-primary btn-sm btn-block"
          onClick={props.onClickOpenModal}
        >Adicionar</button>
      </div>
    </div>
    <div className="row">
      <div className="col col-sm-2">
        #
      </div>
      <div className="col">
        DDD
      </div>
      <div className="col">
        Tipo de Telefone
      </div>
      <div className="col">
        Número do Telefone
      </div>
      <div className="col col-sm-2">
        <button
          className="btn btn-outline-primary btn-sm btn-block"
          onClick={props.onClickOpenModal}
        >Adicionar</button>
      </div>
    </div>
  </>
)

export default TableTelefone