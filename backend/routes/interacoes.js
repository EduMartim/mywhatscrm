// backend/routes/interacoes.js

import express from "express";
import * as interacaoController from "../controllers/interacaoController.js";

const router = express.Router();

router.get("/", interacaoController.getAllInteracoes);
router.post("/", interacaoController.createInteracao);
// Adicione outras rotas (update, delete) se necessário

export default router;