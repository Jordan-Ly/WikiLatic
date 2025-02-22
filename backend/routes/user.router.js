const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller')

router.post('/new', controller.new_user);

router.post('/login', controller.login);

module.exports = router;