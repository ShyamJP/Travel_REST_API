const express = require('express')
const router = express.Router();
const { getAllData } = require("../controllers/data")
const { create , update , del} = require("../controllers/crud")

router.route('/').get(getAllData);
router.route('/create').post(create);
router.route('/update/:id').put(update);
router.route('/delete/:id').delete(del);

module.exports = router