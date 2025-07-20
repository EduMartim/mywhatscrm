const express = require("express");
const router = express.Router();

// Lista todos os imóveis
router.get("/", async (req, res) => {
  try {
    const [rows] = await req.db.query("SELECT * FROM imoveis");
    res.json(rows);
  } catch (err) {
    console.error("Erro ao buscar todos os imóveis:", err);
    res.status(500).json({ error: "Erro ao buscar imóveis" });
  }
});

// Lista imóveis de um cliente específico
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await req.db.query(
      "SELECT * FROM imoveis WHERE cliente_id = ?",
      [id]
    );
    res.json(rows);
  } catch (err) {
    console.error("Erro ao buscar imóveis do cliente:", err);
    res.status(500).json({ error: "Erro ao buscar imóveis" });
  }
});

// POST novo imóvel
router.post("/", async (req, res) => {
  const {
    titulo,
    descricao,
    endereco,
    cidade,
    estado,
    preco,
    tipo,
    status,
    cliente_id,
  } = req.body;

  try {
    const [result] = await req.db.query(
      `INSERT INTO imoveis
      (titulo, descricao, endereco, cidade, estado, preco, tipo, status, cliente_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        titulo,
        descricao,
        endereco,
        cidade,
        estado,
        preco,
        tipo,
        status,
        cliente_id,
      ]
    );

    res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error("Erro ao inserir imóvel:", err);
    res.status(500).json({ error: "Erro ao inserir imóvel" });
  }
});

// PUT imóvel
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, endereco, cidade, estado, preco, tipo, status } =
    req.body;

  const [result] = await req.db.query(
    `UPDATE imoveis SET titulo=?, descricao=?, endereco=?, cidade=?, estado=?, preco=?, tipo=?, status=?
         WHERE id=?`,
    [titulo, descricao, endereco, cidade, estado, preco, tipo, status, id]
  );

  if (result.affectedRows === 0) {
    return res.status(404).json({ error: "Imóvel não encontrado" });
  }

  res.status(204).send();
});

// DELETE imóvel
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const [result] = await req.db.query("DELETE FROM imoveis WHERE id=?", [id]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ error: "Imóvel não encontrado" });
  }

  res.status(204).send();
});

module.exports = router;
