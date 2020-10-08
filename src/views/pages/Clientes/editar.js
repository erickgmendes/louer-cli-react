import React, { Component } from 'react';

//import { insertCliente } from '../../../service/cliente-api'

import TableEmail from '../../components/TableEmail'
import TableTelefone from '../../components/TableTelefone'
import TableReferencias from '../../components/TableReferencias'

import TextBox from '../../components/TextBox'

class ClienteEditar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pessoaJuridica: true,
      labelCpfCnpj: 'CNPJ',
      pessoaTipoNome: 'Nome Fantasia',
      pessoaMask: '11.111.111/1111-11',
      nome: '',
      razaoSocial: '',
      cpfCnpj: '',
      inscricao: '',
      endereco: '',
      numero: '',
      bairro: '',
      cidade: '',
      cep: '',
      uf: '',
      complemento: '',
      observacoes: '',
      emails: [],
      telefones: [],
      referencias: [],

      modoEdicaoEmail: false,
      showModalTelefone: false,
      showModalReferencia: false,
    }
  }

  componentDidMount() {

  }

  onChangeCpfCnpj = event => {
    /*
    const { pessoaJuridica } = this.state
    let valor = event.target.value
    let cpfCnpj = ''
    if (valor !== null) {
      if (pessoaJuridica) { // CNPJ
        for (let i = 0; i < valor.length; i++) {
          if (cpfCnpj.length === 2 || cpfCnpj.length === 6)
            cpfCnpj += '.'
          else if (cpfCnpj.length === 10)
            cpfCnpj += '/'
          else if (cpfCnpj.length === 15)
            cpfCnpj += '-'
          else
            cpfCnpj += valor[i]
        }
      } else { // CPF
        for (let i = 0; i < valor.length; i++) {
          if (cpfCnpj.length === 3 || cpfCnpj.length === 7)
            cpfCnpj += '.'
          else if (cpfCnpj.length === 11)
            cpfCnpj += '-'
          else
            cpfCnpj += valor[i]
        }
      }      
    }
    event.target.value = cpfCnpj
    this.setState({ cpfCnpj: cpfCnpj })
    */
  }

  // Início e-mail
  onClickAdicionarEmail = event => {
    console.log('Add')
    this.setState({ modoEdicaoEmail: true })
  }

  onClickCancelarEmail = event => {
    console.log('Cancel')
    this.setState({ email: '', modoEdicaoEmail: false })
  }

  onClickGravarEmail = event => {
    event.preventDefault()

    let { emails } = this.state
    let enderecoEmail = event.target.enderecoEmail.value
    let key = event.target.enderecoEmail.key

    if (enderecoEmail) {
      emails.push({ enderecoEmail: enderecoEmail })
    }

    event.target.enderecoEmail.value = ''
    event.target.enderecoEmail.focus()

    this.setState({
      modoEdicaoEmail: false,
      emails: emails
    })
  }

  onClickExcluirEmail = event => {
    console.log('Del')
    const { emails } = this.state
    let id = event.target.valueTextBox
    let objetoExcluir = emails.filter(x => x.id === id)[0]
    let indiceExcluir = emails.indexOf(objetoExcluir)
    emails.splice(indiceExcluir, 1)
    this.setState({ emails: emails })
  }
  // Fim e-mail

  // Inicio Telefone
  onClickAdicionarTelefone = event => {
    /*this.setState({
      dddTelefoneAdd: '',
      tipoTelefoneAdd: '',
      numeroTelefoneAdd: '',
    })*/
  }

  onClickExcluirTelefone = event => {
    const { telefones } = this.state
    let id = event.target.value
    let objetoExcluir = telefones.filter(x => x.id === id)[0]
    let indiceExcluir = telefones.indexOf(objetoExcluir)
    telefones.splice(indiceExcluir, 1)
    this.setState({ telefones: telefones })
  }

  onClickOpenModalTelefone = event => {
    this.setState({
      dddTelefone: null,
      numeroTelefone: null,
      tipoTelefone: null
    }, this.setState({ showModalTelefone: true }))
  }

  onClickCloseModalTelefone = event => {
    this.setState({
      dddTelefone: null,
      numeroTelefone: null,
      tipoTelefone: null
    }, this.setState({ showModalTelefone: false }))
  }

  onClickSalvarTelefone = event => {
    event.preventDefault()

    let listaTelefone = this.state.telefones
    let dddTelefone = this.state.dddTelefone
    let numeroTelefone = this.state.numeroTelefone
    let tipoTelefone = this.state.tipoTelefone

    listaTelefone.push({
      "ddd": dddTelefone,
      "numero": numeroTelefone,
      "tipoTelefone": tipoTelefone, TextBox
    })

    this.setState({
      dddTelefone: null,
      numeroTelefone: null,
      tipoTelefone: null
    }, this.atualizarListaTelefone())
  }

  atualizarListaTelefone = () => {
    this.setState({
      dddTelefone: null,
      numeroTelefone: null,
      tipoTelefone: null
    })
  }
  // Fim Telefone

  // Início referência
  onClickAdicionarReferencia = event => {
    /*this.setState({
      nomeReferenciaAdd: '',
      telefoneReferenciaAdd: ''
    })*/
  }

  onClickExcluirReferencia = event => {
    const { referencias } = this.state
    let id = event.target.value
    let objetoExcluir = referencias.filter(x => x.id === id)[0]
    let indiceExcluir = referencias.indexOf(objetoExcluir)
    referencias.splice(indiceExcluir, 1)
    this.setState({ referencias: referencias })
  }

  onClickOpenModalReferencia = event => {
    this.setState({ showModalReferencia: true })
  }

  onClickCloseModalReferencia = event => {
    this.setState({ showModalReferencia: false })
  }

  onFormAddReferenciaSubmit = event => {
    event.preventDefault()

    console.log('Não deveria 3')

    let listaReferencia = this.state.referencias
    let nomeReferencia = event.target.nomeReferencia.value
    let telefoneReferencia = event.target.telefoneReferencia.value

    listaReferencia.push({
      nomeReferencia: nomeReferencia,
      telefoneReferencia: telefoneReferencia
    })

    event.target.nomeReferencia.value = ''
    event.target.telefoneReferencia.value = ''
    event.target.nomeReferencia.focus()

    this.setState({ referencias: listaReferencia })
  }
  // Fim referência  

  onClickPessoaJuridica = event => {
    this.mudaTipoPessoa('CNPJ')
  }

  onClickPessoaFisica = event => {
    this.mudaTipoPessoa('CPF')
  }

  mudaTipoPessoa = (pessoa) => {
    this.setState({
      labelCpfCnpj: pessoa,
      pessoaJuridica: pessoa === 'CNPJ',
      pessoaTipoNome: pessoa === 'CNPJ' ? 'Nome Fantasia' : 'Nome',
      pessoaMask: pessoa === 'CNPJ' ? '11.111.111/1111-11' : '111.111.111-11'
    })
  }

  /*
  onFormSubmit = event => {
    event.preventDefault()

    console.log('deveria \\o/')

    const {
      pessoaJuridica,
      nome,
      razaoSocial,
      cpfCnpj,
      inscricao,
      endereco,
      numero,
      bairro,
      cidade,
      cep,
      uf,
      complemento,
      observacoes,
      emails,
      telefones,
      referencias
    } = this.state

    let cliente = {
      "nome": nome,
      "razaoSocial": razaoSocial,
      "cpfCnpj": cpfCnpj,
      "inscricao": inscricao,
      "endereco": endereco,
      "numero": numero,
      "bairro": bairro,
      "cidade": cidade,
      "cep": cep,
      "uf": uf,
      "complemento": complemento,
      "observacoes": observacoes,
      "emails": emails,
      "telefones": telefones,
      "referencias": referencias,
      "tipoPessoa": pessoaJuridica ? 'FISICA' : 'JURIDICA',
    }

    insertCliente(cliente)

    console.log(this.state)
  }*/

  render() {
    return (
      <>
        <form className="pure-form pure-form-stacked">
          <fieldset>
            <legend>Editar Clientes</legend>
            <label
              for="checkbox-radio-option-two"
              className="pure-radio">
              <input
                type="radio"
                id="checkbox-radio-option-two"
                name="optionsRadios"
                value="option1"
                defaultChecked={this.state.pessoaJuridica}
                onClick={this.onClickPessoaJuridica}
              /> Pessoa Jurídica
            </label>
            <label
              for="checkbox-radio-option-three"
              className="pure-radio">
              <input
                type="radio"
                id="checkbox-radio-option-three"
                name="optionsRadios"
                value="option2"
                defaultChecked={!this.state.pessoaJuridica}
                onClick={this.onClickPessoaFisica}
              /> Pessoa Física
            </label>
            <div className="pure-g">
              <TextBox
                id="cpfCnpj"
                label={this.state.labelCpfCnpj}
                value={this.state.cpfCnpj}
                onChange={this.onChangeCpfCnpj}
              />
              <TextBox
                id="inscricao"
                label="Inscrição"
                value={this.state.inscricao}
                onChange={e => this.setState({ inscricao: e.target.value })}
              />
              <TextBox
                id="nome"
                label={this.state.pessoaTipoNome}
                value={this.state.nome}
                onChange={e => this.setState({ nome: e.target.value })}
              />
              {this.state.pessoaJuridica &&
                <TextBox
                  id="razaoSocial"
                  label="Razão Social"
                  value={this.state.razaoSocial}
                  onChange={e => this.setState({ razaoSocial: e.target.value })}
                />
              }
              <TextBox
                id="endereco"
                label="Endereço"
                value={this.state.endereco}
                onChange={e => this.setState({ endereco: e.target.value })}
              />
              <TextBox
                id="numero"
                label="Número"
                value={this.state.numero}
                onChange={e => this.setState({ numero: e.target.value })}
              />
              <TextBox
                id="complemento"
                label="Complemento"
                value={this.state.complemento}
                onChange={e => this.setState({ complemento: e.target.value })}
              />
              <TextBox
                id="bairro"
                label="Bairro"
                value={this.state.bairro}
                onChange={e => this.setState({ bairro: e.target.value })}
              />
              <TextBox
                id="cidade"
                label="Cidade"
                value={this.state.cidade}
                onChange={e => this.setState({ cidade: e.target.value })}
              />

              <div className="pure-u-1 pure-u-md-1-3">
                <label for="uf">UF</label>
                <select id="uf" className="pure-input-1-2">
                  <option>AC - Acre</option>
                  <option>AL - Alagoas</option>
                  <option>AM - Amazonas</option>
                  <option>AP - Amapá</option>
                  <option>BA - Bahia</option>
                  <option>CE - Ceará</option>
                  <option>DF - Distrito Federal</option>
                  <option>ES - Espírito Santo</option>
                  <option>GO - Goiás</option>
                  <option>MA - Maranhão</option>
                  <option>MG - Minas Gerais</option>
                  <option>MS - Mato Grosso do Sul</option>
                  <option>MT - Mato Grosso</option>
                  <option>PA - Pará</option>
                  <option>PB - Paraíba</option>
                  <option>PE - Pernambuco</option>
                  <option>PI - Piauí</option>
                  <option>PR - Paraná PR</option>
                  <option>RJ - Rio de Janeiro</option>
                  <option>RN - Rio Grande do Norte</option>
                  <option>RO - Rondônia</option>
                  <option>RR - Roraima</option>
                  <option>RS - Rio Grande do Sul</option>
                  <option>SC - Santa Catarina</option>
                  <option>SE - Sergipe</option>
                  <option>SP - São Paulo SP</option>
                  <option>TO - Tocantins</option>
                </select>
              </div>

              <TextBox
                id="cep"
                label="Cep"
                value={this.state.cep}
                onChange={e => this.setState({ cep: e.target.value })}
              />
              <div class="pure-u-1 pure-u-md-1-3">
                <label>Observações</label>
                <textarea
                  className="pure-input-1-2"
                  rows="2"
                />
              </div>

            </div>
            <button type="submit" className="pure-button pure-button-primary">Submit</button>
          </fieldset>
        </form>

        <div className="row">
          <div className="col">
            <ul
              className="nav nav-tabs"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >E-mails</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#perfil"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >Telefones</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contato"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >Referências</a>
              </li>
            </ul>
            <div
              className="tab-content"
              id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <TableEmail
                  lista={this.state.emails}
                  value={this.state.email}
                  modoEdicao={this.state.modoEdicaoEmail}
                  onClickAdicionar={this.onClickAdicionarEmail}
                  onClickCancelar={this.onClickCancelarEmail}
                  onClickGravar={this.onClickGravarEmail}
                  onClickExcluir={this.onClickExcluirEmail}
                />
              </div>
              <div
                className="tab-pane fade"
                id="perfil"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <TableTelefone
                  lista={this.state.telefones}
                  showModal={this.state.showModalTelefone}
                  onClickAdicionar={this.onClickAdicionarTelefone}
                  onClickExcluir={this.onClickExcluirTelefone}
                  onClickOpenModal={this.onClickOpenModalTelefone}
                  onClickCloseModal={this.onClickCloseModalTelefone}
                  onClickSalvar={this.onClickSalvarTelefone}
                  dddTelefone={this.state.dddTelefone}
                  numeroTelefone={this.state.numeroTelefone}
                  tipoTelefone={this.state.tipoTelefone}
                />
              </div>
              <div
                className="tab-pane fade"
                id="contato"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <TableReferencias
                  lista={this.state.referencias}
                  showModal={this.state.showModalReferencia}
                  onClickAdicionar={this.onClickAdicionarReferencia}
                  onClickExcluir={this.onClickExcluirReferencia}
                  onClickOpenModal={this.onClickOpenModalReferencia}
                  onClickCloseModal={this.onClickCloseModalReferencia}
                  onFormSubmit={this.onFormAddReferenciaSubmit}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
          </div>
          <div className="col col-sm-2">
            <button className="btn btn-outline-success btn-sm btn-block" type="submit">Gravar</button>
          </div>
          <div className="col col-sm-2">
            <button className="btn btn-outline-dark btn-sm btn-block"> Retornar</button>
          </div>
        </div>
        <br />
      </>
    )
  }
}

export default ClienteEditar