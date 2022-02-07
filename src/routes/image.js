import { Router } from "express";

import multer from "multer";
import multerConfig from "../config/multer";

import ImageController from "../controllers/Image";

const upload = multer(multerConfig);

const routes = Router();

routes.post('/', upload.single('file'), ImageController.store);

export default routes;
