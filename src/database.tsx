import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('agenciadeviajes', 'root', 'gusblajua', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;