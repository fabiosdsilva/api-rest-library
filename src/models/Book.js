import { Model, DataTypes } from 'sequelize';

export default class Book extends Model {
  static init(sequelize) {
    super.init({
      title: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O campo deve conter entre 3 a 255 caracteres',
          },
        },
      },
      pages: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      release: {
        type: DataTypes.DATE,
      },
    }, { sequelize });
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: 'category_id' });
    this.hasMany(models.Photo, { foreignKey: 'book_id' });
  }
}
