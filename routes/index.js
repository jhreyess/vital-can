const router = require('express').Router();
const path = require('path');
const users = require("./api/users");

//API routes
router.use("/api/users", users);

//If no API routes match
router.use(function(req, res){
    if(!req.route) { res.status(404)}
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = router;