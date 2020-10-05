const DataTypes = require("../db/db").DataTypes;
const sequelize = require("../db/db").sequelize;


const Client = sequelize.define('Client', {
    name: {
        type: DataTypes.STRING,
    },
    login: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    birthday: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    home: {
        type: DataTypes.STRING
    },
    people: {
        type: DataTypes.INTEGER
    },
    animals: {
        type: DataTypes.INTEGER
    }
})

Client.sync({ force: false });

module.exports = Client;