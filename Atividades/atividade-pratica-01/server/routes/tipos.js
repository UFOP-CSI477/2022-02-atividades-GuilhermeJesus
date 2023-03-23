import express from "express";
import { addTipos, deleteTipos, getTipos, updateTipos } from "../controllers/tipos.js";

const router = express.Router();

router.get("/", getTipos);

router.post("/", addTipos);

router.put("/:id", updateTipos);

router.delete("/:id", deleteTipos);

export default router;