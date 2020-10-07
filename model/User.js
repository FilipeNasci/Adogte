const DataTypes = require("../db/db").DataTypes;
const sequelize = require("../db/db").sequelize;


const User = sequelize.define('User', {
    clientId: {
        type: DataTypes.INTEGER,
    },
    login: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING,
    }
})

User.sync({ force: false });

module.exports = User;