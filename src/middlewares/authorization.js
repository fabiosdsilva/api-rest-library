import jwt from "jsonwebtoken";
import User from "../models/User";

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ errors: ['Token required'] });
  }

  const [Bearer, token] = authorization.split(" ");

  const payload = await jwt.verify(token, process.env.JWT_TOKEN_SECRET);

  const credential = await User.findOne({ where: { email: token.email } });
  if (!payload) {
    return res.status(401).json({ errors: ['Usuário não encontrado'] });
  }
  return next();
};
