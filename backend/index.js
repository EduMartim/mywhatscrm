// Importando os pacotes com a sintaxe ES Module
import 'dotenv/config'; // O .config() é executado automaticamente
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

// Importando as rotas. É importante adicionar a extensão .js no final
import clientesRoutes from './routes/clientes.js';
import imoveisRoutes from './routes/imoveis.js';
import interacoesRoutes from './routes/interacoes.js';
import tarefasRoutes from './routes/tarefas.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

// Conexão com banco
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, // Corrigido para corresponder ao .env que fizemos
  database: process.env.DB_NAME,
};
let connection;
async function connectDB() {
  try {
    connection = await mysql.createConnection(dbConfig);
    console.log('✅ Conectado ao MySQL');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:', error);
    process.exit(1); // Encerra a aplicação se não conseguir conectar ao DB
  }
}
connectDB();

// Middleware para deixar a conexão acessível às rotas
app.use((req, res, next) => {
  req.db = connection;
  next();
});

// Rotas
app.use('/api/clientes', clientesRoutes);
app.use('/api/imoveis', imoveisRoutes);
app.use('/api/interacoes', interacoesRoutes);
app.use('/api/tarefas', tarefasRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
