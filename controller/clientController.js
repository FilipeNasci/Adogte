const Client = require('../model/Client');
const Cliente = require('../model/Client');

const registerClient = async (req, res) => {
    await Client.create({
        name: req.body.name,
        birthday: req.body.birthday,
        phone: req.body.phone,
        address: req.body.address,
        home: req.body.home,
        people: parseInt(req.body.people),
        animals: parseInt(req.body.animals),
    }).then(response => {
        res.send('ok');
    }).catch(error => {
        res.send(error);
    })
}

module.exports = { registerClient };