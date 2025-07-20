const express = require("express");
const router = express.Router();

// Lista todas as tarefas
router.get("/", async (req, res) => {
  try {
    const [rows] = await req.db.query("SELECT * FROM tarefas");
    res.json(rows);
  } catch (err) {
    console.error("Erro ao buscar todas as tarefas:", err);
    res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
});

// Lista tarefas de um cliente específico
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await req.db.query(
      "SELECT * FROM tarefas WHERE cliente_id = ?",
      [id]
    );
    res.json(rows);
  } catch (err) {
    console.error("Erro ao buscar tarefas do cliente:", err);
    res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
});

// POST nova tarefa
router.post('/', async (req, res) => {
    const { titulo, descricao, data_vencimento, concluida, cliente_id } = req.body;

    try {
        const [result] = await req.db.query(
            `INSERT INTO tarefas
            (titulo, descricao, data_vencimento, concluida, cliente_id)
            VALUES (?, ?, ?, ?, ?)`,
            [titulo, descricao, data_vencimento, concluida, cliente_id]
        );

        res.status(201).json({ id: result.insertId });
    } catch (err) {
        console.error("Erro ao inserir tarefa:", err);
        res.status(500).json({ error: "Erro ao inserir tarefa" });
    }
});

// PUT tarefa
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, data_vencimento, concluida } = req.body;

    const [result] = await req.db.query(
        `UPDATE tarefas SET titulo=?, descricao=?, data_vencimento=?, concluida=? WHERE id=?`,
        [titulo, descricao, data_vencimento, concluida, id]
    );

    if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    res.status(204).send();
});

// DELETE tarefa
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const [result] = await req.db.query('DELETE FROM tarefas WHERE id=?', [id]);

    if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    res.status(204).send();
});

module.exports = router;
