import { db } from "../db.js";

export const getCadastro = (_, res) => {
  const q = "SELECT * FROM cadastros";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const addCadastro = (req, res) => {
  const q =
    "INSERT INTO cadastros(`nome`, `remedio`, `dosagem`, `horario`) VALUES(?)";
  const values = [
    req.body.nome,
    req.body.remedio,
    req.body.dosagem,
    req.body.horario,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Cadastro realizado com sucesso.");
  });
};

export const updateCadastro = (req, res) => {
  const q =
    "UPDATE cadastros SET `nome` = ?, `remedio` = ?, `dosagem` = ?, `horario` = ? WHERE `id` = ?";
  const values = [
    req.body.nome,
    req.body.remedio,
    req.body.dosagem,
    req.body.horario,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Cadastro atualizado com sucesso.");
  });
};

export const deleteCadastro = (req, res) => {
  const q = "DELETE FROM cadastros WHERE `id` = ?";
  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Cadastro deletado com sucesso.");
  });
};
