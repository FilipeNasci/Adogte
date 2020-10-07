const Client = require('../model/Client');
const User = require('../model/User');

const registerClient = async (req, res) => {
    Client.beforeCreate(function(client, options){
        client.req = req;
    });
    
    await Client.create({
        name: req.body.name,
        birthday: req.body.birthday,
        phone: req.body.phone,
        address: req.body.address,
        home: req.body.home,
        people: parseInt(req.body.people),
        animals: parseInt(req.body.animals),
    }).then(response => {
        return res.status(201).json({ message: 'Cadastro realizado com sucesso!' });
    }).catch(error => {
        return res.status(500).send(error);
    })
}

module.exports = { registerClient };