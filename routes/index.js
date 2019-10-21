let express = require('express');
let router = express.Router();
let controller = require('../controller/index')
console.log('router loaded');

router.get('/a',controller.a);
router.post('/signup',controller.signup);
router.post('/login',controller.login);

module.exports= router;