import express from "express";
import { addEstados, deleteEstados, getEstados, updateEstados } from "../controllers/estados.js";

const router = express.Router();

router.get("/", getEstados);

router.post("/", addEstados);

router.put("/:id", updateEstados);

router.delete("/:id", deleteEstados);

export default router;