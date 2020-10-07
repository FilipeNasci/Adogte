const DataTypes = require("../db/db").DataTypes;
const sequelize = require("../db/db").sequelize;
const User = require('./User');


const Client = sequelize.define('Client', {
    name: {
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

Client.addHook('afterCreate', async (client) => {
    await User.create({
        clientId: client.id,
        login: client.req.body.login,
        password: client.req.body.password,
        type: 'client'
    })
});

Client.sync({ force: false });

module.exports = Client;