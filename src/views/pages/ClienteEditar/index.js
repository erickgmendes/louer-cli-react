import React from 'react';

import { Container, Form, Row, Col, Button, Tabs, Tab } from 'react-bootstrap'

import TableEmail from '../../components/TableEmail'
import TableTelefone from '../../components/TableTelefone'
import TableReferencias from '../../components/TableReferencias'

export default class ClienteEditar extends React.Component {
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

      showModalTelefone: false,
      showModalEmail: false,
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
    /*this.setState({
      enderecoEmailAdd: ''
    })*/
  }

  onClickExcluirEmail = event => {
    const { emails } = this.state
    let id = event.target.value
    let objetoExcluir = emails.filter(x => x.id === id)[0]
    let indiceExcluir = emails.indexOf(objetoExcluir)
    emails.splice(indiceExcluir, 1)
    this.setState({ emails: emails })
  }

  onClickOpenModalEmail = event => {
    this.setState({ showModalEmail: true })
  }

  onClickCloseModalEmail = event => {
    this.setState({ showModalEmail: false })
  }

  onFormAddEmailSubmit = event => {
    event.preventDefault()

    let listaEmail = this.state.emails
    let enderecoEmail = event.target.enderecoEmail.value

    listaEmail.push({
      enderecoEmail: enderecoEmail
    })

    event.target.enderecoEmail.value = ''
    event.target.enderecoEmail.focus()

    this.setState({ emails: listaEmail })
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
    this.setState({ showModalTelefone: true })
  }

  onClickCloseModalTelefone = event => {
    this.setState({ showModalTelefone: false })
  }

  onFormAddTelefoneSubmit = event => {
    event.preventDefault()

    let listaTelefone = this.state.telefones
    let dddTelefone = event.target.dddTelefone.value
    let tipoTelefone = event.target.tipoTelefone.value
    let numeroTelefone = event.target.numeroTelefone.value

    listaTelefone.push({
      dddTelefone: dddTelefone,
      tipoTelefone: tipoTelefone,
      numeroTelefone: numeroTelefone
    })

    event.target.dddTelefone.value = ''
    event.target.tipoTelefone.value = ''
    event.target.numeroTelefone.value = ''
    event.target.dddTelefone.focus()

    this.setState({ telefones: listaTelefone })
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

  onFormSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <Container>
        <h5>Editar Clientes</h5>
        <hr />
        <Form onSubmit={this.onFormSubmit}>
          <Row>
            <Col sm={2}>
              <Form.Check
                inline
                defaultChecked={this.state.pessoaJuridica}
                type='radio'
                label='Pessoa Jurídica'
                name="radioTipoPessoa"
                onClick={this.onClickPessoaJuridica}
              />
              <br />
              <Form.Check
                inline
                defaultChecked={!this.state.pessoaJuridica}
                type='radio'
                label='Pessoa Física'
                name="radioTipoPessoa"
                onClick={this.onClickPessoaFisica}
              />
            </Col>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>{this.state.labelCpfCnpj}</Form.Label>
                <Form.Control
                  type='text'
                  size="sm"
                  defaultValue={this.state.cpfCnpj}
                  onChange={this.onChangeCpfCnpj}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Inscrição</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder="Informe o número da inscrição"
                  defaultValue={this.state.inscricao}
                  onChange={e => this.setState({ inscricao: e.target.value })}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>{this.state.pessoaTipoNome}</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder={"Informe o " + this.state.pessoaTipoNome}
                  defaultValue={this.state.nome}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {this.state.pessoaJuridica && <Col sm={4}>
              <Form.Group>
                <Form.Label>Razão Social</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder={"Informe a Razão Social"}
                  defaultValue={this.state.razaoSocial}
                />
              </Form.Group>
            </Col>}
            <Col>
              <Form.Group>
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder={"Informe o endereço"}
                  defaultValue={this.state.endereco}
                />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>Número</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder={"Informe o número"}
                  defaultValue={this.state.numero}
                />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>Complemento</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder={"Informe o complemento"}
                  defaultValue={this.state.bairro}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Bairro</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder={"Informe o bairro"}
                  defaultValue={this.state.bairro}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Cidade</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder={"Informe a cidade"}
                  defaultValue={this.state.cidade}
                />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>UF</Form.Label>
                <Form.Control
                  as="select"
                  size="sm"
                >
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
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group>
                <Form.Label>CEP</Form.Label>
                <Form.Control
                  type='text'
                  size="sm"
                  mask='11111-111'
                  defaultValue={this.state.cep}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Observações</Form.Label>
                <Form.Control
                  as="textarea"
                  size="sm"
                  rows="3"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tabs defaultActiveKey="emails" id="uncontrolled-tab-example">
                <Tab eventKey="emails" title="E-mails">
                  <TableEmail
                    lista={this.state.emails}
                    showModal={this.state.showModalEmail}
                    onClickAdicionar={this.onClickAdicionarEmail}
                    onClickExcluir={this.onClickExcluirEmail}
                    onClickOpenModal={this.onClickOpenModalEmail}
                    onClickCloseModal={this.onClickCloseModalEmail}
                    onFormSubmit={this.onFormAddEmailSubmit}
                  />
                </Tab>
                <Tab eventKey="telefones" title="Telefones">
                  <TableTelefone
                    lista={this.state.telefones}
                    showModal={this.state.showModalTelefone}
                    onClickAdicionar={this.onClickAdicionarTelefone}
                    onClickExcluir={this.onClickExcluirTelefone}
                    onClickOpenModal={this.onClickOpenModalTelefone}
                    onClickCloseModal={this.onClickCloseModalTelefone}
                    onFormSubmit={this.onFormAddTelefoneSubmit}
                  />
                </Tab>
                <Tab eventKey="referencias" title="Referências">
                  <TableReferencias
                    lista={this.state.referencias}
                    showModal={this.state.showModalReferencia}
                    onClickAdicionar={this.onClickAdicionarReferencia}
                    onClickExcluir={this.onClickExcluirReferencia}
                    onClickOpenModal={this.onClickOpenModalReferencia}
                    onClickCloseModal={this.onClickCloseModalReferencia}
                    onFormSubmit={this.onFormAddReferenciaSubmit}
                  />
                </Tab>
              </Tabs>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
            </Col>
            <Col sm={3}>
              <Button
                type="submit"
                size="sm"
                variant="outline-dark"
                style={{ width: '100%' }}
              >Gravar</Button>
            </Col>
            <Col sm={3}>
              <Button size="sm" variant="outline-secondary" style={{ width: '100%' }}>Retornar</Button>
            </Col>
            <Col>
            </Col>
          </Row>
          <br />
        </Form>
      </Container >
    )
  }
}