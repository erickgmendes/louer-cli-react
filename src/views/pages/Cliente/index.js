import React from 'react';

import { Container, Form, Row, Col } from 'react-bootstrap'
import MaskedFormControl from 'react-bootstrap-maskedinput' // https://www.npmjs.com/package/react-bootstrap-maskedinput

export default class Cliente extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pessoaJuridica: true,
      pessoaCodigo: '',
      pessoaLabel: 'CNPJ',
      pessoaTipoNome: 'Nome Fantasia',
      pessoaMask: '11.111.111/1111-11',
      nome: '',
      razaoSocial: '',      
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
      pessoaLabel: pessoa,
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
        <h5>Clientes</h5>
        <hr />
        <Form>
          <div>
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
          </div>
          <Row>
            <Col >
              <Form.Group>
                <Form.Label>{this.state.pessoaLabel}</Form.Label>
                <MaskedFormControl
                  type='text'
                  mask={this.state.pessoaMask}
                  value={this.state.pessoaCodigo}
                />
              </Form.Group>
            </Col>
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

        </Form>
      </Container>
    )
  }
}
