import { db } from "../db.js";

export const getPessoas = (_, res) =>{

    const q = "SELECT * FROM pessoas";

    db.query(q, (err, data) =>{

        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addPessoas = (req, res) => {
    const q =
      "INSERT INTO pessoas(`nome`,`documento`) VALUES(?)";
  
    const values = [
        req.body.nome,
        req.body.documento,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Novo cadastro realizado.");
    });
  };

  export const updatePessoas = (req, res) => {
    const q =
      "UPDATE pessoas SET `nome` = ?, `documento` = ? WHERE `id` = ?";
  
    const values = [
        req.body.nome,
        req.body.documento,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Cadastro atualizado.");
    });
  };

  export const deletePessoas = (req, res) => {
    const q = "DELETE FROM pessoas WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Cadastro deletado.");
    });
  };