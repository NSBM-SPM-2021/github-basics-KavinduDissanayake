import { Sequelize } from "sequelize";

//Datbase Config           datbase name             username         password
const db = new Sequelize('heroku_5f5edbc8dc00cca', 'b664fbdfa94763', 'd59a8f44', {
    host: "us-cdbr-east-04.cleardb.com",
    dialect: "mysql"

});

export default db ;