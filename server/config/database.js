import { Sequelize } from "sequelize";

//Datbase Config 
const db = new Sequelize('spm_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"

});

export default db ;