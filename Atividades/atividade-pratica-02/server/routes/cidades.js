import express from "express";
import { addCidades, deleteCidades, getCidades, updateCidades } from "../controllers/cidades.js";

const router = express.Router();

router.get("/", getCidades);

router.post("/", addCidades);

router.put("/:id", updateCidades);

router.delete("/:id", deleteCidades);

export default router;