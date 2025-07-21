// frontend/src/services/api.js

import axios from "axios";

const api = axios.create({
  // URL base para todas as requisições da nossa API
  baseURL: "http://localhost:3000/api", // Adicionei o /api que faltava na sua constante
});

// (Opcional, mas muito útil) Interceptor para tratar respostas
api.interceptors.response.use(
  (response) => {
    // Retorna diretamente os dados da resposta
    return response.data;
  },
  (error) => {
    // Trata erros de forma centralizada (ex: token expirado, servidor offline)
    console.error("Erro na chamada da API:", error);
    // Rejeita a promise para que o erro possa ser tratado no componente que fez a chamada
    return Promise.reject(error);
  }
);

export default api;