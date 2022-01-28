import { Router } from "express";
import BookController from '../controllers/Book';

import multer from "multer";
import multerConfig from "../config/multer";

import PhotoController from "../controllers/Photo";

const upload = multer(multerConfig);

const routes = Router();

routes.get('/', BookController.index);
routes.post('/', BookController.store);
routes.get('/:bookId', BookController.show);

export default routes;
