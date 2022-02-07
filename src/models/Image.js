import { Model, DataTypes } from 'sequelize';

export default class Image extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O campo Originalname não pode ser vázio',
          },
        },
      },
      filename: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'O campo Filename não pode ser vázio',
          },
        },
      },
      url: {
        type: DataTypes.STRING,
      },
    }, { sequelize });
  }

  static associate(models) {
    this.hasMany(models.Book, { foreignKey: 'image_id' });
  }
}
