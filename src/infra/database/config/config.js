require("dotenv").config();
const Sequelize = require("sequelize");

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
console.log("progress", process.env);
const databaseCredentials = {
    development: {
        username: DB_USER,
        password: DB_PASS,
        database: DB_NAME,
        host: DB_HOST,
        dialect: "postgres",
    },
    test: {
        username: DB_USER,
        password: DB_PASS,
        database: DB_NAME,
        host: DB_HOST,
        dialect: "postgres",
    },
    production: {
        username: DB_USER,
        password: DB_PASS,
        database: DB_NAME,
        host: DB_HOST,
        dialect: "postgres",
    },
};
const { username, password, database, host, dialect } = databaseCredentials.development;
console.log("databaseCredentials", databaseCredentials);
module.exports = databaseCredentials;

module.exports.connection = new Sequelize(database, username, password, {
    host,
    dialect,
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
        multipleStatements: true,
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
    logging: false,
});
