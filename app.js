import express from "express";

import dotenv from 'dotenv';

dotenv.config();

import "./src/database";

// ROUTES
import user from "./src/routes/user";
import category from "./src/routes/category";
import book from "./src/routes/book";
import photo from "./src/routes/photo";

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
    this.app.use('/book', book);
    this.app.use('/photo', photo);
  }
}

export default new App().app;
