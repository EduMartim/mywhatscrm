// backend/controllers/imovelController.js

// TODO: Adapte os campos e queries se o seu banco de dados for diferente.

export const getAllImoveis = async (req, res) => {
  try {
    const [rows] = await req.db.query("SELECT * FROM imoveis");
    res.json(rows);
  } catch (error) {
    console.error("Erro ao buscar imóveis:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

export const createImovel = async (req, res) => {
  const { titulo, descricao, preco, cliente_id } = req.body;
  try {
    const [result] = await req.db.query(
      "INSERT INTO imoveis (titulo, descricao, preco, cliente_id) VALUES (?, ?, ?, ?)",
      [titulo, descricao, preco, cliente_id]
    );
    res.status(201).json({ id: result.insertId, message: "Imóvel criado com sucesso!" });
  } catch (err) {
    console.error("Erro ao inserir imóvel:", err);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};