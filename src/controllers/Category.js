import Category from "../models/Category";

class CategoryController {
  async index(req, res) {
    try {
      const categories = await Category.findAll({ attributes: ['id', 'name'] });
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async store(req, res) {
    try {
      if (!req.body.name) {
        return res.status(400).json({ errors: 'O nome da categoria é inválido' });
      }
      const category = await Category.create({ name: req.body.name });
      const { id, name } = category;
      return res.status(200).json({ id, name });
    } catch (error) {
      return res.status(400).json({ error: error.errors.map((e) => e.message) });
    }
  }

  // async show(req, res) {

  // }

  async update(req, res) {

  }

  async delete(req, res) {

  }
}

export default new CategoryController();
