const express = require("express");
const { getPage } = require("../controllers/pageController");

const router = express.Router();

router.get("/:slug", getPage);

module.exports = router;
