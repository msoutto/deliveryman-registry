import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AddDeliveryman = () => {
  let history = useHistory();
  const [deliveryman, setDeliveryman] = useState({
    name: "",
    document: "",
    plate: "",
    company: ""
  });

  const { name, document, plate, company } = deliveryman;
  const onInputChange = e => {
    setDeliveryman({ ...deliveryman, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://127.0.0.1:3003/deliverymen", deliveryman);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Addicionar Entregador</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Nome"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Documento"
              name="document"
              value={document}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Placa"
              name="plate"
              value={plate}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Empresa"
              name="company"
              value={company}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default AddDeliveryman;