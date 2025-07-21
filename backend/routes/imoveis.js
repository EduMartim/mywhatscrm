// backend/routes/imoveis.js

import express from "express";
import * as imovelController from "../controllers/imovelController.js";

const router = express.Router();

router.get("/", imovelController.getAllImoveis);
router.post("/", imovelController.createImovel);
// Adicione outras rotas (update, delete) se necessário

export default router;