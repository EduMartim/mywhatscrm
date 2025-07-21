// backend/routes/tarefas.js

import express from "express";
import * as tarefaController from "../controllers/tarefaController.js";

const router = express.Router();

router.get("/", tarefaController.getAllTarefas);
router.post("/", tarefaController.createTarefa);
// Adicione outras rotas (update, delete) se necessário

export default router;