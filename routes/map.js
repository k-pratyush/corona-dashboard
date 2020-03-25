const express = require("express");
const {landingPage, getStats} = require("../controllers/mapController");
const router = express.Router();

router.route('/').get(landingPage);
router.route('/').post(getStats);
module.exports = router;
