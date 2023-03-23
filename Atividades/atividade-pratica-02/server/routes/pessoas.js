import express from "express";
import { addPessoas, deletePessoas, getPessoas, updatePessoas } from "../controllers/pessoas.js";

const router = express.Router();

router.get("/", getPessoas);

router.post("/", addPessoas);

router.put("/:id", updatePessoas);

router.delete("/:id", deletePessoas);

export default router;