const express = require('express');
const router = express.Router();

// GET todas as tarefas
router.get('/', async (req, res) => {
    const [rows] = await req.db.query('SELECT * FROM tarefas');
    res.json(rows);
});

// POST nova tarefa
router.post('/', async (req, res) => {
    const { titulo, descricao, data_vencimento, concluida } = req.body;

    const [result] = await req.db.query(
        `INSERT INTO tarefas (titulo, descricao, data_vencimento, concluida)
         VALUES (?, ?, ?, ?)`,
        [titulo, descricao, data_vencimento, concluida]
    );

    res.status(201).json({ id: result.insertId });
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
