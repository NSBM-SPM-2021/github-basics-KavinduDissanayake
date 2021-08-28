import { Sequelize } from "sequelize";
const db = new Sequelize('spm_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"

});

export default db ;