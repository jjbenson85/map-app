const router = require("express").Router();
const location = require("./api/location")

router.route("/location").get(location.search);

module.exports = router;
