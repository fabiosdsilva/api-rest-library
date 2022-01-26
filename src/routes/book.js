import { Router } from "express";
import BookController from '../controllers/Book';

const routes = Router();

routes.get('/', BookController.index);
routes.post('/', BookController.store);
routes.get('/:bookId', BookController.show);

export default routes;
