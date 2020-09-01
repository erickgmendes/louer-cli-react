import React from 'react';

import { Container, Form, Row, Col, Table, Button } from 'react-bootstrap'

import MaskedFormControl from 'react-bootstrap-maskedinput' // https://www.npmjs.com/package/react-bootstrap-maskedinput

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

    }
  }

  componentDidMount() {

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
                checked={this.state.pessoaJuridica}
                type='radio'
                label='Pessoa Jurídica'
                name="radioTipoPessoa"
                onClick={this.onClickPessoaJuridica}
              />
              <Form.Check
                inline
                checked={!this.state.pessoaJuridica}
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
                  value={this.state.cpfCnpj}
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
                  onChange={e => this.setState({inscricao: e.target.value})}
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
                  value={this.state.nome}
                />
              </Form.Group>
            </Col>
            {this.state.pessoaJuridica && <Col>
              <Form.Group>
                <Form.Label>Razão Social</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={"Informe a Razão Social"}
                  value={this.state.razaoSocial}
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
                  value={this.state.endereco}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Número</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={"Informe o número"}
                  value={this.state.numero}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Complemento</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={"Informe o complemento"}
                  value={this.state.bairro}
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
                  value={this.state.bairro}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Cidade</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={"Informe a cidade"}
                  value={this.state.cidade}
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
                  value={this.state.cep}
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
              <h6>Telefones</h6>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>DDD</th>
                    <th>Tipo</th>
                    <th>Número</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>21</td>
                    <td>Cel</td>
                    <td>1234-5678</td>
                    <td><Button variant="outline-dark" size="sm"><img src=""></img></Button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>21</td>
                    <td>Cel</td>
                    <td>1234-5678</td>
                    <td><Button variant="outline-dark" size="sm"><img src=""></img></Button></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>21</td>
                    <td>Cel</td>
                    <td>1234-5678</td>
                    <td><Button variant="outline-dark" size="sm"><img src=""></img></Button></td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col>
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
                  <tr>
                    <td>1</td>
                    <td>login@server.com</td>
                    <td><Button variant="outline-dark" size="sm"><img src=""></img></Button></td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col>
              <h6>Referências</h6>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>João</td>
                    <td>1234-5678</td>
                    <td><Button variant="outline-dark" size="sm"><img src=""></img></Button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>José</td>
                    <td>1234-5678</td>
                    <td><Button variant="outline-dark" size="sm"><img src=""></img></Button></td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
            </Col>
            <Col sm={3}>
              <Button variant="success" style={{ width: '100%' }}>Gravar</Button>
            </Col>
            <Col sm={3}>
              <Button variant="warning" style={{ width: '100%' }}>Retornar</Button>
            </Col>
            <Col>
            </Col>
          </Row>
        </Form>
      </Container>
    )
  }
}