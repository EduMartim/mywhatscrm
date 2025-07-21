// backend/controllers/corretorController.js

export const getAllCorretores = async (req, res) => {
  try {
    const [rows] = await req.db.query("SELECT * FROM corretores");
    res.json(rows);
  } catch (error) {
    console.error("Erro ao buscar corretores:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

export const getCorretorById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await req.db.query("SELECT * FROM corretores WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Corretor não encontrado" });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error("Erro ao buscar corretor:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

export const createCorretor = async (req, res) => {
  const { nome, email, telefone } = req.body;
  try {
    const [result] = await req.db.query(
      "INSERT INTO corretores (nome, email, telefone) VALUES (?, ?, ?)",
      [nome, email, telefone]
    );
    res.status(201).json({ id: result.insertId, message: "Corretor criado com sucesso!" });
  } catch (err) {
    console.error("Erro ao inserir corretor:", err);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

export const updateCorretor = async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone } = req.body;
  try {
    const [result] = await req.db.query(
      "UPDATE corretores SET nome = ?, email = ?, telefone = ? WHERE id = ?",
      [nome, email, telefone, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Corretor não encontrado" });
    }
    res.status(200).json({ message: "Corretor atualizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar corretor:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

export const deleteCorretor = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await req.db.query("DELETE FROM corretores WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Corretor não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    console.error("Erro ao deletar corretor:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};