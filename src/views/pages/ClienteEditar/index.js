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
      dddTelefoneAdd: '',
      tipoTelefoneAdd: '',
      numeroTelefoneAdd: '',
    }
  }

  componentDidMount() {

  }

  onChangeCpfCnpj = event => {
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
  }

  onClickExcluirEmail = event => {
    const { emails } = this.state
    let id = event.target.value
    let objetoExcluir = emails.filter(x => x.id === id)[0]
    let indiceExcluir = emails.indexOf(objetoExcluir)
    emails.splice(indiceExcluir, 1)
    this.setState({ emails: emails })
  }

  onClickOpenModalTelefone = event => {
    this.setState({ showModalTelefone: true })
  }

  onClickCloseModalTelefone = event => {
    this.setState({ showModalTelefone: false })
  }

  onClickAdicionarTelefone = event => {
    this.setState({
      dddTelefoneAdd: '',
      tipoTelefoneAdd: '',
      numeroTelefoneAdd: '',
    })
  }

  onClickExcluirTelefone = event => {
    const { telefones } = this.state
    let id = event.target.value
    let objetoExcluir = telefones.filter(x => x.id === id)[0]
    let indiceExcluir = telefones.indexOf(objetoExcluir)
    telefones.splice(indiceExcluir, 1)
    this.setState({ telefones: telefones })
  }

  onClickExcluirReferencia = event => {
    const { referencias } = this.state
    let id = event.target.value
    let objetoExcluir = referencias.filter(x => x.id === id)[0]
    let indiceExcluir = referencias.indexOf(objetoExcluir)
    referencias.splice(indiceExcluir, 1)
    this.setState({ referencias: referencias })
  }

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

  onFormAddTelefoneSubmit = event => {
    event.preventDefault()

    let listaTelefone = this.state.telefones
    let ddd = event.target.ddd.value
    let tipo = event.target.tipo.value
    let numero = event.target.numero.value

    listaTelefone.push({
      ddd: ddd,
      tipo: tipo,
      numero: numero
    })

    event.target.ddd.value = ''
    event.target.tipo.value = ''
    event.target.numero.value = ''
    event.target.ddd.focus()

    this.setState({ telefones: listaTelefone })
  }

  onFormAddEmailSubmit = event => {
    event.preventDefault()

    let listaEmail = this.state.Emails
    let endereco = event.target.endereco.value

    listaEmail.push({
      endereco: endereco
    })

    event.target.endereco.value = ''
    event.target.endereco.focus()

    this.setState({ listaEmail: listaEmail })
  }

  render() {
    return (
      <Container>
        <h5>Editar Clientes</h5>
        <hr />
        <Form onSubmit={this.onFormSubmit}>
          <Row>
            <Col>
              <Form.Check
                inline
                defaultChecked={this.state.pessoaJuridica}
                type='radio'
                label='Pessoa Jurídica'
                name="radioTipoPessoa"
                onClick={this.onClickPessoaJuridica}
              />
              <Form.Check
                inline
                defaultChecked={!this.state.pessoaJuridica}
                type='radio'
                label='Pessoa Física'
                name="radioTipoPessoa"
                onClick={this.onClickPessoaFisica}
              />
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>{this.state.labelCpfCnpj}</Form.Label>
                <Form.Control
                  type='text'
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
                  placeholder="Informe o número da inscrição"
                  defaultValue={this.state.inscricao}
                  onChange={e => this.setState({ inscricao: e.target.value })}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>{this.state.pessoaTipoNome}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={"Informe o " + this.state.pessoaTipoNome}
                  defaultValue={this.state.nome}
                />
              </Form.Group>
            </Col>
            {this.state.pessoaJuridica && <Col>
              <Form.Group>
                <Form.Label>Razão Social</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={"Informe a Razão Social"}
                  defaultValue={this.state.razaoSocial}
                />
              </Form.Group>
            </Col>}
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={"Informe o endereço"}
                  defaultValue={this.state.endereco}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Número</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={"Informe o número"}
                  defaultValue={this.state.numero}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Complemento</Form.Label>
                <Form.Control
                  type="text"
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
                  placeholder={"Informe a cidade"}
                  defaultValue={this.state.cidade}
                />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>UF</Form.Label>
                <Form.Control as="select">
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
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tabs defaultActiveKey="emails" id="uncontrolled-tab-example">
                <Tab eventKey="emails" title="E-mails">
                  <TableEmail
                    lista={this.state.emails}
                    onClickExcluir={this.onClickExcluirEmail}
                    onClickAdicionar={this.onClickAdicionarEmail}
                  />
                </Tab>
                <Tab eventKey="telefones" title="Telefones">
                  <TableTelefone
                    lista={this.state.telefones}
                    showModal={this.state.showModalTelefone}
                    onClickExcluir={this.onClickExcluirTelefone}
                    onClickOpenModal={this.onClickOpenModalTelefone}
                    onClickCloseModal={this.onClickCloseModalTelefone}
                    onClickAdicionar={this.onClickAdicionarTelefone}
                    onFormSubmit={this.onFormAddTelefoneSubmit}
                  />
                </Tab>
                <Tab eventKey="referencias" title="Referências">
                  <TableReferencias
                    lista={this.state.referencias}
                    onClickExcluir={this.onClickExcluirReferencia}
                    onClickAdicionar={this.onClickAdicionarTelefone}
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
                variant="outline-dark"
                style={{ width: '100%' }}
              >Gravar</Button>
            </Col>
            <Col sm={3}>
              <Button variant="outline-secondary" style={{ width: '100%' }}>Retornar</Button>
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