// backend/controllers/tarefaController.js

// TODO: Adapte os campos e queries se o seu banco de dados for diferente.

export const getAllTarefas = async (req, res) => {
  try {
    const [rows] = await req.db.query("SELECT * FROM tarefas");
    res.json(rows);
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};

export const createTarefa = async (req, res) => {
  const { titulo, concluida, cliente_id } = req.body;
  try {
    const [result] = await req.db.query(
      "INSERT INTO tarefas (titulo, concluida, cliente_id) VALUES (?, ?, ?)",
      [titulo, concluida, cliente_id]
    );
    res.status(201).json({ id: result.insertId, message: "Tarefa criada com sucesso!" });
  } catch (err) {
    console.error("Erro ao inserir tarefa:", err);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
};