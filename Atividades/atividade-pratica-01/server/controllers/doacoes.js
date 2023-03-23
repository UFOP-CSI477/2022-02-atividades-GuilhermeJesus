import { db } from "../db.js";

export const getDoacoes = (_, res) =>{

    const q = "SELECT * FROM doacoes";

    db.query(q, (err, data) =>{

        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addDoacoes = (req, res) => {
    const q =
      "INSERT INTO doacoes(`data`) VALUES(?)";
  
    const values = [
        req.body.data,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Novo cadastro realizado.");
    });
  };

  export const updateDoacoes = (req, res) => {
    const q =
      "UPDATE doacoes SET `data` = ?, WHERE `id` = ?";
  
    const values = [
        req.body.data,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Cadastro atualizado.");
    });
  };

  export const deleteDoacoes = (req, res) => {
    const q = "DELETE FROM doacoes WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Cadastro deletado.");
    });
  };