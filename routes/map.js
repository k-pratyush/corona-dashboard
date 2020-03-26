const express = require("express");
const {landingPage, getStats, generatePlot} = require("../controllers/mapController");

const router = express.Router();

router.route('/').get(landingPage);
router.route('/plot').get(generatePlot);
router.route('/').post(getStats);

module.exports = router;
