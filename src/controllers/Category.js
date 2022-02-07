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

  async update(req, res) {
    const { id } = req.body;
    try {
      const isCategory = await Category.findByPk(id);
      if (!isCategory) {
        return res.status(400).json({ error: ['Categoria não encontrada'] });
      }
      const update = await isCategory.update(req.body);
      return res.json(update);
    } catch (error) {
      return res.status(400).json({ error: error.errors.map((e) => e.message) });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: ['Parâmetro inválido'] });
    }
    try {
      const del = await Category.findByPk(id);
      if (!del) {
        return res.status(400).json({ error: ['Categoria não encontrada'] });
      }
      const destroy = await del.destroy();
      return res.json({ delete: true });
    } catch (error) {
      return res.status(400).json({ error: error.errors.map((e) => e.message) });
    }
  }
}

export default new CategoryController();
