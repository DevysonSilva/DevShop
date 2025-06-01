// backend/utils/createAdmin.js

const bcrypt = require("bcryptjs");
const mysql = require("mysql2/promise");
require("dotenv").config();

(async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  const nome = "Admin Master";
  const email = "admin@devshop.com";
  const senha = "123456";
  const hash = await bcrypt.hash(senha, 10);

  try {
    const [result] = await connection.execute(
      "INSERT INTO administradores (nome, email, senha) VALUES (?, ?, ?)",
      [nome, email, hash]
    );
    console.log("Administrador criado com sucesso! ID:", result.insertId);
  } catch (err) {
    console.error("Erro ao criar administrador:", err.message);
  } finally {
    connection.end();
  }
})();