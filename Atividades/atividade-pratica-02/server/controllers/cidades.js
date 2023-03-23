import { db } from "../db.js";

export const getCidades = (_, res) =>{

    const q = "SELECT * FROM cidades";

    db.query(q, (err, data) =>{

        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addCidades = (req, res) => {
    const q =
      "INSERT INTO cidades(`nome`) VALUES(?)";
  
    const values = [
        req.body.nome,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Novo cadastro realizado.");
    });
  };

  export const updateCidades = (req, res) => {
    const q =
      "UPDATE cidades SET `nome` = ?, WHERE `id` = ?";
  
    const values = [
        req.body.nome,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Cadastro atualizado.");
    });
  };

  export const deleteCidades = (req, res) => {
    const q = "DELETE FROM cidades WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Cadastro deletado.");
    });
  };