import express from "express";

import dotenv from 'dotenv';

dotenv.config();

import "./src/database";

// ROUTES
import user from "./src/routes/user";
import category from "./src/routes/category";


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
    this.app.use('/category', category);
  }
}

export default new App().app;
