import User from "../models/User";

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      return res.json(users);
    } catch (error) {
      return res.status(400).json({ "error": error.errors.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const user = await User.create(req.body);
      const { id, name, email } = user;
      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400).json({ "error": error.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({ errors: ['Usuário não existe'] });
      }
      const { id, name, email } = user;
      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({ errors: ['Usuário não encontrado'] });
      }
      const update_user = await user.update(req.body);
      const { id, name, email, updated_at } = update_user;
      return res.json({ id, name, email, updated_at });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }
}

export default new UserController();
