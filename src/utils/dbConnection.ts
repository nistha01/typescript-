import { Sequelize } from 'sequelize';

const db = new Sequelize('typestudent', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
