import Sequelize from "sequelize";
import dbConfig from "../config/database";

import User from "../models/User";
import Book from "../models/Book";
import Photo from "../models/Photo";
import Category from "../models/Category";

// My models
const models = [User, Book, Photo, Category];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    models.map((model) => model.init(this.connection));
    models.map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
