const express = require('express');
const router = express.Router();

// GET todas as interações
router.get('/', async (req, res) => {
    const [rows] = await req.db.query('SELECT * FROM interacoes');
    res.json(rows);
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
