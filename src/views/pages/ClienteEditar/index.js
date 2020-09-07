import React from 'react';

import { Container, Form, Row, Col, Button, Tabs, Tab } from 'react-bootstrap'

import MaskedFormControl from 'react-bootstrap-maskedinput' // https://www.npmjs.com/package/react-bootstrap-maskedinput

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
      emails: [
        {
          id: "1",
          endereco: 'email@servidor.com'
        },
        {
          id: "2",
          endereco: 'email2@servidor2.com'
        }
      ],
      telefones: [
        {
          id: "1",
          ddd: '021',
          tipo: 'Celular',
          numero: '1234-5678'
        },
        {
          id: "2",
          ddd: '021',
          tipo: 'Residencial',
          numero: '4321-8765'
        },
        {
          id: "3",
          ddd: '021',
          tipo: 'Celular',
          numero: '99999-8765'
        }
      ],
      referencias: [
        {
          id: "1",
          nome: 'Terezinha',
          telefone: '1234-5678'
        },
        {
          id: "2",
          nome: 'Fifi',
          telefone: '4321-8765'
        },
        {
          id: "3",
          nome: 'Fafá',
          telefone: '9999-8765'
        }
      ],

      showModalTelefone: false,
      dddTelefoneAdd: '',
      tipoTelefoneAdd: '',
      numeroTelefoneAdd: '',
    }
  }

  componentDidMount() {

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
    console.log("AQUI")
  }

  render() {
    return (
      <Container>
        <h5>Editar Clientes</h5>
        <hr />
        <Form>
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
                <MaskedFormControl
                  type='text'
                  mask={this.state.pessoaMask}
                  defaultValue={this.state.cpfCnpj}
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
                <MaskedFormControl
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
              <Button variant="outline-dark" style={{ width: '100%' }}>Gravar</Button>
            </Col>
            <Col sm={3}>
              <Button variant="outline-secondary" style={{ width: '100%' }}>Retornar</Button>
            </Col>
            <Col>
            </Col>
          </Row>
          <br />
        </Form>
      </Container>
    )
  }
}