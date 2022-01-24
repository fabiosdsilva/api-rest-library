import { Model, DataTypes } from "sequelize";
import bcrypt from "bcryptjs";

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O campo nome deve conter entre 3 a 255 caracteres',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          msg: 'O email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      password_hash: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 12],
            msg: 'A senha deve conter entre 6 a 12 caracteres',
          },
        },
      },
    },
    { sequelize },
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
  }
}
