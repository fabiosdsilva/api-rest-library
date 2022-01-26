import { Model, DataTypes } from 'sequelize';

export default class Category extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 30],
            msg: 'O nome da categoria deve conter entre 3 a 30 caracteres',
          },
        },
        unique: {
          msg: 'Essa categoria já existe',
        },
      },
    }, { sequelize });
  }
}
