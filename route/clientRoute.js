const express = require('express');
const router = express.Router();
const controller = require('../controller/clientController');

router.post('/registerClient', express.json(), controller.registerClient);


module.exports = router;