import { Router } from "express";
import User from "../controllers/user";

const routes = Router();

routes.get('/', User.index);
routes.get('/:id', User.show);
routes.post('/', User.store);
routes.put('/update/:id', User.update);

export default routes;
