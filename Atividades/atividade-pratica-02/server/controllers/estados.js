import { db } from "../db.js";

export const getEstados = (_, res) =>{

    const q = "SELECT * FROM estados";

    db.query(q, (err, data) =>{

        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addEstados = (req, res) => {
    const q =
      "INSERT INTO estados(`nome`, `sigla`) VALUES(?)";
  
    const values = [
        req.body.nome,
        req.body.sigla,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Novo cadastro realizado.");
    });
  };

  export const updateEstados = (req, res) => {
    const q =
      "UPDATE estados SET `nome` = ?, `sigla` = ? WHERE `id` = ?";
  
    const values = [
        req.body.nome,
        req.body.sigla,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Cadastro atualizado.");
    });
  };

  export const deleteEstados = (req, res) => {
    const q = "DELETE FROM estados WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Cadastro deletado.");
    });
  };