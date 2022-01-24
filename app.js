import express from "express";
import user from "./src/routes/user";

import "./src/database";

class App {
  constructor() {
    this.app = express();
    this.use();
    this.routes();
  }

  use() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/user', user);
  }
}

export default new App().app;
