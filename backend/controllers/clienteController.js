// backend/controllers/clienteController.js

// Lógica para buscar todos os clientes
export const getAllClientes = async (req, res) => {
  try {
    const [rows] = await req.db.query("SELECT * FROM clientes");
    res.json(rows);
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

// Lógica para criar um novo cliente
export const createCliente = async (req, res) => {
  const { nome, email, telefone, cpf, tipo, origem, status, observacoes, corretor_id } = req.body;

  try {
    const [result] = await req.db.query(
      `INSERT INTO clientes (nome, email, telefone, cpf, tipo, origem, status, observacoes, corretor_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [nome, email, telefone, cpf, tipo, origem, status, observacoes, corretor_id]
    );
    res.status(201).json({ id: result.insertId, message: "Cliente criado com sucesso!" });
  } catch (err) {
    console.error("Erro ao inserir cliente:", err);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

// Lógica para atualizar um cliente
export const updateCliente = async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone, tipo, origem, status, observacoes } = req.body;

  try {
    const [result] = await req.db.query(
      `UPDATE clientes SET nome = ?, email = ?, telefone = ?, tipo = ?, origem = ?, status = ?, observacoes = ? WHERE id = ?`,
      [nome, email, telefone, tipo, origem, status, observacoes, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }
    res.status(200).json({ message: "Cliente atualizado com sucesso!" });
  } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
      res.status(500).json({ message: "Erro interno no servidor" });
  }
};

// Lógica para deletar um cliente
export const deleteCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await req.db.query("DELETE FROM clientes WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Cliente não encontrado" });
    }
    res.status(204).send(); // 204 No Content é ideal para deletes bem-sucedidos
  } catch (error) {
      console.error("Erro ao deletar cliente:", error);
      res.status(500).json({ message: "Erro interno no servidor" });
  }
};
