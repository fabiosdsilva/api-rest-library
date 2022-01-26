import express from "express";

import dotenv from 'dotenv';

dotenv.config();

import "./src/database";

import user from "./src/routes/user";


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
