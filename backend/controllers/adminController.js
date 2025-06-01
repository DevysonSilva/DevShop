const bcrypt = require("bcryptjs");
const AdminModel = require("../models/AdminModel");

const login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const user = await AdminModel.getByEmail(email);
    if (!user) return res.status(401).json({ msg: "Usuário não encontrado" });

    const match = await bcrypt.compare(senha, user.senha);
    if (!match) return res.status(401).json({ msg: "Senha incorreta" });

    // Aqui futuramente podemos gerar um token
    res.json({ msg: "Login bem-sucedido", user: { id: user.id, nome: user.nome } });
  } catch (err) {
    res.status(500).json({ msg: "Erro no servidor" });
  }
};

module.exports = { login };