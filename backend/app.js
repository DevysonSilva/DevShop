// backend/app.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const adminRoutes = require("./routes/AdminRoutes");

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Teste de rota simples
app.get("/", (req, res) => {
  res.send("LuxCommerce backend ativo 🛍️");
});

// Rotas da API
app.use("/api", adminRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});