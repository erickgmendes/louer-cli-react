import { http } from "../service/http";

export const fetchClientes = clientes => http.get("clientes");

export const insertCliente = cliente => http.post("clientes")
    .then(res => {
        console.log(res);
        console.log(res.data);
    })

/*

{
  "bairro": "string",
  "cep": "string",
  "cidade": "string",
  "complemento": "string",
  "cpfCnpj": "string",
  "dataCadastro": "2020-09-09T22:37:30.087Z",
  "emails": [
    {
      "endereco": "string",
      "tipoEmail": "PESSOAL"
    }
  ],
  "endereco": "string",
  "inscricao": "string",
  "nome": "string",
  "numero": "string",
  "observacoes": "string",
  "razaoSocial": "string",
  "referencias": [
    {
      "afinidade": "string",
      "nome": "string",
      "telefone": "string"
    }
  ],
  "telefones": [
    {
      "ddd": "string",
      "numero": "string",
      "tipoTelefone": "RESIDENCIAL"
    }
  ],
  "tipoCliente": "NORMAL",
  "tipoPessoa": "FISICA",
  "uf": "string"
}

*/
