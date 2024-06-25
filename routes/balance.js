const router = require('express').Router()
const { getBalance, getBalancefromJSON } = require("../controllers/balance");

router.route('/').get(getBalance)
router.route('/json').get(getBalancefromJSON)

module.exports = router;