const express = require('express');
const router = express.Router();
const { filterCards } = require('../controllers/cards');

router.route('/').get(filterCards);

module.exports = router;