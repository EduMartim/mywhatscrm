// backend/controllers/interacaoController.js

// TODO: Adapte os campos e queries se o seu banco de dados for diferente.

export const getAllInteracoes = async (req, res) => {
  try {
    const [rows] = await req.db.query("SELECT * FROM interacoes");
    res.json(rows);
  } catch (error) {
    console.error("Erro ao buscar interações:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

export const createInteracao = async (req, res) => {
  const { canal, descricao, cliente_id } = req.body;
  try {
    const [result] = await req.db.query(
      "INSERT INTO interacoes (canal, descricao, cliente_id) VALUES (?, ?, ?)",
      [canal, descricao, cliente_id]
    );
    res.status(201).json({ id: result.insertId, message: "Interação criada com sucesso!" });
  } catch (err) {
    console.error("Erro ao inserir interação:", err);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};