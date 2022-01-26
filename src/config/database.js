require('dotenv').config();

module.exports = {
  dialect: process.env.DIALECT,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  host: process.env.HOST_NAME,
  database: process.env.DATABASE,
  port: process.env.PORT,
  define: {
    timestamps: true,
    underscored: true,
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
