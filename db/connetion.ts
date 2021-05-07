import { Sequelize } from 'sequelize';

const db = new Sequelize('ts_rest_server', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb'
  // logging: false
});

export default db;
