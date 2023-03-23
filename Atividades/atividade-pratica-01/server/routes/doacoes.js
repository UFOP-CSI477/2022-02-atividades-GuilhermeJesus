import express from "express";
import { addDoacoes, deleteDoacoes, getDoacoes, updateDoacoes } from "../controllers/doacoes.js";

const router = express.Router();

router.get("/", getDoacoes);

router.post("/", addDoacoes);

router.put("/:id", updateDoacoes);

router.delete("/:id", deleteDoacoes);

export default router;