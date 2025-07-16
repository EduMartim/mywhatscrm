require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

// Configuração da conexão MySQL usando variáveis de ambiente
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Exemplo de rota
app.get('/crm_sistema', (req, res) => {
  pool.query('SELECT 1 + 1 AS resultado', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});

app.listen(3001, () => {
  console.log('Backend rodando na porta 3001');
});