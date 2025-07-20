const express = require("express");
const router = express.Router();

// Lista todas as interações
router.get("/", async (req, res) => {
  try {
    const [rows] = await req.db.query("SELECT * FROM interacoes");
    res.json(rows);
  } catch (err) {
    console.error("Erro ao buscar todas as interações:", err);
    res.status(500).json({ error: "Erro ao buscar interações" });
  }
});

// Lista interações de um cliente específico
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await req.db.query(
      "SELECT * FROM interacoes WHERE cliente_id = ?",
      [id]
    );
    res.json(rows);
  } catch (err) {
    console.error("Erro ao buscar interações do cliente:", err);
    res.status(500).json({ error: "Erro ao buscar interações" });
  }
});

// POST nova interação
router.post('/', async (req, res) => {
    const { cliente_id, data, canal, descricao } = req.body;

    const [result] = await req.db.query(
        `INSERT INTO interacoes (cliente_id, data, canal, descricao)
         VALUES (?, ?, ?, ?)`,
        [cliente_id, data, canal, descricao]
    );

    res.status(201).json({ id: result.insertId });
});

// PUT interação
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { cliente_id, data, canal, descricao } = req.body;

    const [result] = await req.db.query(
        `UPDATE interacoes SET cliente_id=?, data=?, canal=?, descricao=? WHERE id=?`,
        [cliente_id, data, canal, descricao, id]
    );

    if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Interação não encontrada' });
    }

    res.status(204).send();
});

// DELETE interação
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const [result] = await req.db.query('DELETE FROM interacoes WHERE id=?', [id]);

    if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Interação não encontrada' });
    }

    res.status(204).send();
});

module.exports = router;
