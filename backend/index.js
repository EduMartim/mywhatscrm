require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Conexão com o banco
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'crm_sistema',
};

let connection;

async function connectDB() {
  connection = await mysql.createConnection(dbConfig);
  console.log('✅ Conectado ao MySQL');
}

connectDB().catch(err => {
  console.error('Erro ao conectar ao banco:', err);
  process.exit(1);
});

// Rotas básicas para clientes

// GET todos os clientes
app.get('/api/clientes', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM clientes');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET cliente por id
app.get('/api/clientes/:id', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM clientes WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Cliente não encontrado' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST novo cliente
app.post('/api/clientes', async (req, res) => {
  const { nome, email, telefone, tipo, origem, status, observacoes } = req.body;
  try {
    const [result] = await connection.query(
      `INSERT INTO clientes (nome, email, telefone, tipo, origem, status, observacoes)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [nome, email, telefone, tipo, origem, status, observacoes]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT atualizar cliente
app.put('/api/clientes/:id', async (req, res) => {
  const { nome, email, telefone, tipo, origem, status, observacoes } = req.body;
  try {
    const [result] = await connection.query(
      `UPDATE clientes SET nome=?, email=?, telefone=?, tipo=?, origem=?, status=?, observacoes=? WHERE id=?`,
      [nome, email, telefone, tipo, origem, status, observacoes, req.params.id]
    );
    res.json({ affectedRows: result.affectedRows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE cliente
app.delete('/api/clientes/:id', async (req, res) => {
  try {
    const [result] = await connection.query('DELETE FROM clientes WHERE id=?', [req.params.id]);
    res.json({ affectedRows: result.affectedRows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Inicializar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
