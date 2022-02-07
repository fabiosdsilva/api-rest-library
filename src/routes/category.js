import { Router } from "express";
import Category from "../controllers/Category";

const routes = Router();

// SHOW ALL
routes.get('/', Category.index);

routes.post('/', Category.store);

routes.put('/update', Category.update);

routes.delete('/delete/:id', Category.delete);

export default routes;
