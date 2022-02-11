import express from "express";
import cors from "cors";

import dotenv from 'dotenv';

dotenv.config();

import "./src/database";

import user from "./src/routes/user";
import category from "./src/routes/category";
import book from "./src/routes/book";
import image from "./src/routes/image";
import auth from "./src/routes/auth";

class App {
  constructor() {
    this.app = express();
    this.use();
    this.routes();
  }

  use() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/user', user);
    this.app.use('/category', category);
    this.app.use('/book', book);
    this.app.use('/image', image);
    this.app.use('/auth', auth);
  }
}

export default new App().app;
