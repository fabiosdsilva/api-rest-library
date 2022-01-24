module.exports = {
  dialect: 'mysql',
  username: 'root',
  password: '1234',
  host: 'localhost',
  database: 'teste',
  port: 3306,
  define: {
    timestamps: true,
    underscored: true,
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
