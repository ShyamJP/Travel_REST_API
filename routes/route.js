const express = require('express')
const router = express.Router();
const { getAllData } = require("../controllers/data")

router.route('/').get(getAllData);

module.exports = router