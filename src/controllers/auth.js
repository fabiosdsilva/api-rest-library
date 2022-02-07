import jwt from "jsonwebtoken";
import User from "../models/User";

class Auth {
  async store(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({ errors: ['Der ser passado email e senha corretamente'] });
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ errors: ['Usuário não existe'] });
    }

    // Verifica se a senha passada está correta
    if (!(await user.validatorUser(password))) {
      return res.status(401).json({ errors: ['A senha está incorreta'] });
    }
    const { id } = user;

    // Gera um token e nele posso extrair id e email do usuário
    const token = await jwt.sign({ id, email }, process.env.JWT_TOKEN_SECRET, {
      expiresIn: process.env.JWT_TOKEN_EXPIRATION,
    });
    return res.json({ token });
  }
}

export default new Auth();
