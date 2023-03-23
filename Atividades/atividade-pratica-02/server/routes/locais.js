import express from "express";
import { addLocais, deleteLocais, getLocais, updateLocais } from "../controllers/locais.js";

const router = express.Router();

router.get("/", getLocais);

router.post("/", addLocais);

router.put("/:id", updateLocais);

router.delete("/:id", deleteLocais);

export default router;