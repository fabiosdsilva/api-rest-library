import { Router } from "express";
import auth from "../controllers/auth";

const routes = Router();

routes.post('/', auth.store);

export default routes;
