import { Model, DataTypes } from 'sequelize';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'O campo Originalname não pode ser vázio',
          },
        },
      },
      filename: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'O campo Filename não pode ser vázio',
          },
        },
      },
    }, { sequelize });
  }

  static associate(models) {
    this.belongsTo(models.Book, { foreignKey: 'book_id' });
  }
}
