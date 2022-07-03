const path = require("path");
const router = require('express').Router();

//GET
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});





module.exports = router;