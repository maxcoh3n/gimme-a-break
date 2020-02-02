const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
    let info = req.query;
    res.render("timer.ejs", info);
});

module.exports = router;
