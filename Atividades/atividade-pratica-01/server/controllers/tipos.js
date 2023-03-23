import { db } from "../db.js";

export const getTipo = (_, res) =>{

    const q = "SELECT * FROM tipos_sanguineos";

    db.query(q, (err, data) =>{

        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addTipo = (req, res) => {
    const q =
      "INSERT INTO tipos_sanguineos(`tipo`,`fator`) VALUES(?)";
  
    const values = [
        req.body.tipo,
        req.body.fator
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Novo cadastro realizado.");
    });
  };

  export const updateTipo = (req, res) => {
    const q =
      "UPDATE tipos_sanguineos SET `tipo` = ?,`fator` = ?, WHERE `id` = ?";
  
    const values = [
      req.body.tipo,
      req.body.fator
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Cadastro atualizado.");
    });
  };

  export const deleteLocais = (req, res) => {
    const q = "DELETE FROM locais_coleta WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Cadastro deletado.");
    });
  };