import { Router } from "express";
import User from "../controllers/user";

import authorization from "../middlewares/authorization";

const routes = Router();

routes.get('/', User.index);
routes.get('/:id', User.show);
routes.post('/', User.store);
routes.put('/update', authorization, User.update);

export default routes;
