import Book from "../models/Book";
import Category from "../models/Category";
import Photo from "./Photo";

class BookController {
  async index(req, res) {
    try {
      const books = await Book.findAll({
        attributes: ['id', 'title', 'pages', 'release'],
        order: [['id', 'DESC']],
        include: [{ model: Category, attributes: ['name'] }],
      });
      return res.json(books);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async store(req, res) {
    try {
      const { title, pages, release, category_id } = req.body;
      if (!title) {
        return res.status(400).json('É preciso informar o título do livro');
      }

      const book = await Book.create({ title, pages, release, category_id });
      if (!book) {
        return res.status(400).json('error');
      }
      return res.json(book);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async show(req, res) {
    const { bookId } = req.params;
    try {
      if (!bookId) {
        return res.status(400).json('Usuário não encontrado');
      }

      const book = await Book.findByPk(bookId, {
        attributes: ['id', 'title', 'pages', 'release'],
        include: [{ model: Category, attributes: ['name'] }],
      });
      if (!book) {
        return res.status(400).json('Usuário não existe');
      }
      return res.json(book);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }

  // async update(req, res) {

  // }

  // async delete(req, res) {

  // }
}

export default new BookController();
