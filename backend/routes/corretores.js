// backend/routes/corretores.js

import express from "express";
import * as corretorController from "../controllers/corretorController.js";

const router = express.Router();

router.get("/", corretorController.getAllCorretores);
router.get("/:id", corretorController.getCorretorById);
router.post("/", corretorController.createCorretor);
router.put("/:id", corretorController.updateCorretor);
router.delete("/:id", corretorController.deleteCorretor);

export default router;