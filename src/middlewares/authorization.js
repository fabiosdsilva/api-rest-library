import jwt from "jsonwebtoken";
import User from "../models/User";

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ errors: ['Token required'] });
  }

  const [Bearer, token] = authorization.split(" ");

  try {
    const payload = await jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    const isToken = await User.findOne({ where: { id: payload.id, email: payload.email } });
    if (!isToken) {
      return res.json('usuario invalido');
    }

    req.userId = isToken.id;
    return next();
  } catch (error) {
    return res.status(401).jso({ errors: ['Token inválido'] });
  }
};
