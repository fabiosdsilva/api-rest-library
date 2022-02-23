import jwt from "jsonwebtoken";
import User from "../models/User";

class Auth {
  async store(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({ errors: ['Deve ser passado email e senha corretamente'] });
    }

    email.toLowercase();
    password.toLowercase();

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ errors: ['Usuário não existe'] });
    }

    if (!(await user.validatorUser(password))) {
      return res.status(401).json({ errors: ['A senha está incorreta'] });
    }
    const { id } = user;

    const token = await jwt.sign({ id, email }, process.env.JWT_TOKEN_SECRET, {
      expiresIn: process.env.JWT_TOKEN_EXPIRATION,
    });
    return res.json({ token });
  }
}

export default new Auth();
