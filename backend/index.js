require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Conexão com banco
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};
let connection;
async function connectDB() {
  connection = await mysql.createConnection(dbConfig);
  console.log('✅ Conectado ao MySQL');
}
connectDB();

// Middleware para deixar a conexão acessível às rotas
app.use((req, res, next) => {
  req.db = connection;  // trocamos de req.connection para req.db
  next();
});

// Rotas
const clientesRoutes = require('./routes/clientes');
const imoveisRoutes = require('./routes/imoveis');
const interacoesRoutes = require('./routes/interacoes');
const tarefasRoutes = require('./routes/tarefas');
const corretoresRouter = require('./routes/corretores');

app.use('/api/clientes', clientesRoutes);
app.use('/api/imoveis', imoveisRoutes);
app.use('/api/interacoes', interacoesRoutes);
app.use('/api/tarefas', tarefasRoutes);
app.use('/api/corretores', corretoresRouter);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
