import React, { Component } from 'react';

//import { fetchClientes, deleteCliente } from '../../../service/cliente-api'
import ClienteService from '../../../service/ClienteService'

export default class Clientes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientes: []
    }
  }

  componentDidMount() {
    ClienteService.getAll().then(res => this.setState({ clientes: res.data }));
  }

  removerCliente = event =>{
    let id = event.target.value
    console.log(id)

    //deleteCliente(id).then(res => this.setState({ clientes: res.data }));

    ClienteService.remove(id)
    .then(response => {
      console.log(response.data);
      this.history.push("/clientes");


    })
    .catch(e => {
      console.log(e);
    });    


//    .then(ClienteService.getAll().then(res => this.setState({ clientes: res.data })));



    //TutorialDataService.remove(currentTutorial.id)
  }

  render() {
    const { clientes } = this.state

    console.log(clientes)

    return (
      <div class="container">
        <table className="table table-striped table-hover table-sm">
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th>CPF / CNPJ</th>
              <th>Nome</th>
              <th>x</th>
            </tr>
          </thead>
          <tbody>
            {clientes.length > 0 && clientes.map(x => (
              <tr>
                <td>{x.id}</td>
                <td>{x.cpfCnpj}</td>
                <td>{x.nome}</td>
                <td><button onClick={this.removerCliente} value={x.id} class="btn btn-danger btn-sm" title="">Excluir</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}