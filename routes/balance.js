const router = require('express').Router()
const { getBalance } = require("../controllers/balance");

router.route('/').get(getBalance)

module.exports = router;