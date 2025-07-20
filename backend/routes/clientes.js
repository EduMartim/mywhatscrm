const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await req.db.query("SELECT * FROM clientes");
    res.json(rows);
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    res.status(500).json({ error: "Erro ao buscar clientes" });
  }
});

router.post('/', async (req, res) => {
    const { nome, email, telefone, cpf, tipo, origem, status, observacoes, corretor_id } = req.body;

    try {
        const [result] = await req.db.query(
            `INSERT INTO clientes
            (nome, email, telefone, cpf, tipo, origem, status, observacoes, corretor_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [nome, email, telefone, cpf, tipo, origem, status, observacoes, corretor_id]
        );

        res.status(201).json({ id: result.insertId });
    } catch (err) {
        console.error("Erro ao inserir cliente:", err);
        res.status(500).json({ error: "Erro ao inserir cliente" });
    }
});


router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone, tipo, origem, status, observacoes } = req.body;

  const [result] = await req.db.query(
    `UPDATE clientes SET nome = ?, email = ?, telefone = ?, tipo = ?, origem = ?, status = ?, observacoes = ?
         WHERE id = ?`,
    [nome, email, telefone, tipo, origem, status, observacoes, id]
  );

  if (result.affectedRows === 0) {
    return res.status(404).json({ error: "Cliente não encontrado" });
  }

  res.status(204).send();
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const [result] = await req.db.query("DELETE FROM clientes WHERE id = ?", [
    id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ error: "Cliente não encontrado" });
  }

  res.status(204).send();
});

module.exports = router;
