import { Router } from "express";
import auth from "../controllers/Auth";

const routes = Router();

routes.post('/', auth.store);

export default routes;
