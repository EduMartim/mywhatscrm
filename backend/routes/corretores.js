const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const [rows] = await req.db.query('SELECT * FROM corretores');
    res.json(rows);
});

router.post('/', async (req, res) => {
    const { nome, email, telefone } = req.body;
    const [result] = await req.db.query(
        'INSERT INTO corretores (nome, email, telefone) VALUES (?, ?, ?)',
        [nome, email, telefone]
    );
    res.status(201).json({ id: result.insertId });
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const [rows] = await req.db.query('SELECT * FROM corretores WHERE id = ?', [id]);
    if (rows.length === 0) {
        return res.status(404).json({ error: 'Corretor não encontrado' });
    }
    res.json(rows[0]);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, telefone } = req.body;
    const [result] = await req.db.query(
        'UPDATE corretores SET nome = ?, email = ?, telefone = ? WHERE id = ?',
        [nome, email, telefone, id]
    );
    if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Corretor não encontrado' });
    }
    res.sendStatus(204);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const [result] = await req.db.query('DELETE FROM corretores WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Corretor não encontrado' });
    }
    res.sendStatus(204);
});

module.exports = router;
