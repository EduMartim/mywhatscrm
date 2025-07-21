# 📋 mywhatscrm — Sistema CRM para Corretores de Imóveis

![Status](https://img.shields.io/badge/status-Em%20Desenvolvimento-yellow)
![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?logo=node.js)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![License](https://img.shields.io/badge/license-MIT-blue)

> Um sistema de CRM focado no gerenciamento de clientes, imóveis e tarefas diárias, projetado especialmente para o mercado imobiliário. Este projeto está sendo desenvolvido como um estudo prático de arquitetura full-stack, com foco em design responsivo e mobile-first.

---

## ✨ Funcionalidades Principais

-   ✅ **Gestão de Clientes:** Cadastro e listagem de todos os seus clientes.
-   ✅ **Equipe de Corretores:** Cadastro e organização dos corretores da equipe.
-   ✅ **Associação de Carteiras:** Vincule clientes a corretores específicos.
-   ✅ **Catálogo de Imóveis:** Registre imóveis detalhadamente.
-   ✅ **Registro de Atividades:** Cadastre interações e tarefas vinculadas a cada cliente.
-   ✅ **API RESTful:** Backend com rotas completas para `GET`, `POST`, `PUT` e `DELETE`.
-   ✅ **Interface Moderna:** Frontend responsivo construído com React, Vite e TailwindCSS.

---

## 🚀 Tecnologias Utilizadas

O projeto é dividido em duas partes principais: o frontend (a interface que o usuário vê) e o backend (a lógica que roda no servidor).

| Categoria     | Tecnologia                                                                                                                              |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| 🖥️ **Frontend** | `React`, `Vite`, `TailwindCSS`                                                                                                          |
| ⚙️ **Backend** | `Node.js`, `Express`, `MySQL`, `dotenv`                                                                                                 |
| 🛠️ **Ferramentas** | `VS Code`, `MySQL Workbench`, `Thunder Client` (para testes de API)                                                                     |

---

## 🛠️ Como Executar o Projeto Localmente

Para rodar o `mywhatscrm` na sua máquina, siga os passos abaixo.

### **Pré-requisitos**

Antes de começar, certifique-se de que você tem os seguintes softwares instalados:

-   [Node.js](https://nodejs.org/) (versão 18 ou superior)
-   [MySQL](https://www.mysql.com/) (versão 8 ou superior)
-   `npm` (geralmente instalado junto com o Node.js)

### **Passo a Passo**

1.  **Clone o Repositório**
    Abra o seu terminal, navegue até o diretório onde deseja salvar o projeto e execute o comando abaixo:
    ```bash
    git clone [https://github.com/EduMartim/mywhatscrm.git](https://github.com/EduMartim/mywhatscrm.git)
    cd mywhatscrm
    ```

2.  **Configure o Banco de Dados**
    -   Abra o seu gerenciador de banco de dados (como o MySQL Workbench).
    -   Crie um novo banco de dados chamado `crm_sistema`.
    -   Execute o script `schema.sql` (localizado na pasta `/sql`) para criar todas as tabelas necessárias.

3.  **Configure e Inicie o Backend**
    -   Navegue para a pasta do backend e instale as dependências:
        ```bash
        cd backend
        npm install
        ```
    -   Crie um arquivo chamado `.env` na raiz da pasta `backend` e preencha com as suas credenciais do banco de dados:
        ```ini
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=sua_senha_aqui
        DB_NAME=crm_sistema
        PORT=3000
        ```
    -   Inicie o servidor do backend:
        ```bash
        npm run dev
        ```
    -   O servidor estará rodando em `http://localhost:3000`.

4.  **Configure e Inicie o Frontend**
    -   Abra um **novo terminal**, navegue até a pasta do frontend e instale as dependências:
        ```bash
        cd frontend
        npm install
        ```
    -   Inicie a aplicação React:
        ```bash
        npm run dev
        ```
    -   A aplicação estará disponível no seu navegador em `http://localhost:5173`.

---

## 📈 Melhorias Futuras

O projeto está em constante evolução. Os próximos passos planejados são:

-   [ ] Implementar sistema de autenticação e login para corretores.
-   [ ] Criar dashboards e relatórios de desempenho.
-   [ ] Finalizar o layout mobile-first para todas as telas.
-   [ ] Adicionar funcionalidade de upload de imagens para os imóveis.
-   [ ] Realizar o deploy da aplicação em um serviço de nuvem (como Vercel ou Heroku).

---

## 📸 Screenshots

*Imagens da aplicação para ilustrar o funcionamento*

[Exemplo de Tela]

Trabalhando nisso ***:-)***

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<p align="center">
  Desenvolvido com ❤️ por Edu Martim
</p>