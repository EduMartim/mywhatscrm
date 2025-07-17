const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const [rows] = await req.db.query('SELECT * FROM imoveis');
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { titulo, descricao, endereco, cidade, estado, preco, tipo, status } = req.body;
  const [result] = await req.db.query(
    `INSERT INTO imoveis (titulo, descricao, endereco, cidade, estado, preco, tipo, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [titulo, descricao, endereco, cidade, estado, preco, tipo, status]
  );
  res.status(201).json({ id: result.insertId });
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, endereco, cidade, estado, preco, tipo, status } = req.body;

    const [result] = await req.db.query(
        `UPDATE imoveis SET titulo=?, descricao=?, endereco=?, cidade=?, estado=?, preco=?, tipo=?, status=?
         WHERE id=?`,
        [titulo, descricao, endereco, cidade, estado, preco, tipo, status, id]
    );

    if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Imóvel não encontrado' });
    }

    res.status(204).send();
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const [result] = await req.db.query(
        'DELETE FROM imoveis WHERE id=?',
        [id]
    );

    if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Imóvel não encontrado' });
    }

    res.status(204).send();
});


module.exports = router;
