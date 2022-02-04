import { Router } from "express";
import BookController from '../controllers/Book';

import multer from "multer";
import multerConfig from "../config/multer";

import ImageController from "../controllers/Image";

import authorization from "../middlewares/authorization";

const upload = multer(multerConfig);

const routes = Router();

routes.get('/', BookController.index);
routes.post('/', upload.single('file'), BookController.store);
routes.get('/:bookId', BookController.show);

export default routes;
