import { http } from "./http";

const getAll = () => http.get("clientes")

const get = id => http.get(`clientes/${id}`)

const create = data => http.post("clientes", data)

const update = (id, data) => http.put(`clientes/${id}`, data)

const remove = id => http.delete(`clientes/${id}`)

export default {
  getAll,
  get,
  create,
  update,
  remove,
};