import { Router } from "express";

import multer from "multer";
import multerConfig from "../config/multer";

import PhotoController from "../controllers/Photo";

const upload = multer(multerConfig);

const routes = Router();

routes.post('/', upload.single('file'), PhotoController.store);

export default routes;
