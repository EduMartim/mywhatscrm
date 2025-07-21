import express from "express";
const router = express.Router();

import * as clienteController from "../controllers/clienteController.js"; // Usamos import

// As rotas continuam iguais
router.get("/", clienteController.getAllClientes);
router.post("/", clienteController.createCliente);
router.put("/:id", clienteController.updateCliente);
router.delete("/:id", clienteController.deleteCliente);

// A forma de exportar a rota também muda
export default router;