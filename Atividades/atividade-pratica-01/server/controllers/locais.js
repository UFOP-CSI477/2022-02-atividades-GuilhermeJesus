import { db } from "../db.js";

export const getLocais = (_, res) =>{

    const q = "SELECT * FROM locais_coleta";

    db.query(q, (err, data) =>{

        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addLocais = (req, res) => {
    const q =
      "INSERT INTO locais_coleta(`nome`,`rua`,`numero`) VALUES(?)";
  
    const values = [
        req.body.nome,
        req.body.rua,
        req.body.numero
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Novo cadastro realizado.");
    });
  };

  export const updateLocais = (req, res) => {
    const q =
      "UPDATE locais_coleta SET `nome` = ?,`rua` = ?,`numero` = ?, WHERE `id` = ?";
  
    const values = [
      req.body.nome,
      req.body.rua,
      req.body.numero
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