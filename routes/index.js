const router = require('express').Router();
const path = require('path');
const users = require("./api/users");
const records = require("./api/records");

//API routes
router.use("/api/users", users);
router.use("/api/records", records);

//If no API routes match
router.use(function(req, res){
    if(!req.route) { res.status(404)}
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;