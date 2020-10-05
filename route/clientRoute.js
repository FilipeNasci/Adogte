const express = require('express');
const router = express.Router();
const controller = require('../controller/clientController');

router.post('/registerClient', express.urlencoded({ extended: true }), controller.registerClient);


module.exports = router;