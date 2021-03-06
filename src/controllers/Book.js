import Book from "../models/Book";
import Category from "../models/Category";
import Image from "../models/Image";

class BookController {
  async index(req, res) {
    try {
      const books = await Book.findAll({
        attributes: ['id', 'title', 'pages', 'release', 'category_id', 'active', 'image_id'],
        order: [['id', 'DESC']],
        include: [{ model: Category, attributes: ['id', 'name'] }, { model: Image }],
      });
      return res.json(books);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async show(req, res) {
    const { bookId } = req.params;
    try {
      if (!bookId) {
        return res.status(404).json('Usuário não encontrado');
      }

      const book = await Book.findByPk(bookId, {
        attributes: ['id', 'title', 'pages', 'release', 'category_id', 'active'],
        include: [{ model: Category, attributes: ['name'] }, { model: Image }],
      });
      if (!book) {
        return res.status(400).json('Usuário não existe');
      }
      return res.json(book);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((e) => e.message) });
    }
  }

  async store(req, res) {
    try {
      const {
        title,
        pages,
        release,
        categoryId,
      } = req.body;
      if (!title) {
        return res.status(400).json('É preciso informar o título do livro');
      }
      const { originalname, filename } = req.file;

      const file = await Image.create({ originalname, filename });
      const book = await Book.create({
        title,
        pages,
        release,
        category_id: categoryId,
        image_id: file.id,
      });
      if (!book) {
        return res.status(400).json({ error: ['Não foi possível inserir'] });
      }
      return res.json({ book, file });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new BookController();
