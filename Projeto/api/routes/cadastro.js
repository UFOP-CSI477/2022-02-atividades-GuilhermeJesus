import express from "express";
import { addCadastro,
      deleteCadastro,
        getCadastro,
       updateCadastro 
        } from "../controllers/cadastro.js";
 
const rt = express.Router()

rt.get("/", getCadastro)
rt.post("/", addCadastro)
rt.put("/:id", updateCadastro)
rt.delete("/:id", deleteCadastro)

export default rt