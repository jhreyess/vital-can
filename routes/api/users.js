const router = require('express').Router();
const bcrypt = require("bcrypt");

const validateLoginInput = require("../../validations/login");
const User = require('../../models/usersModel');

router.post('/login', (req, res) => {
    //Form validation
    const{
        errors,
        isValid
    } = validateLoginInput(req.body);

    //If errors return a bad response
    if(!isValid){return res.status(400).json(errors)}

    //if no errors
    const email = req.body.email;
    const password = req.body.password;

    //MongoDB find user - if not return 404
    User.findOne({
        email: req.body.email
    }).then(user=>{

        if(!user){
            return res.status(404).json({
                emailNotFound: "Email not found"
            });
        }

        //Compare password
        bcrypt.compare(password, user.password).then(isMatch => {
            if(!isMatch) return res.status(400).json({passwordIncorrect: "Password incorrect"});
        });
    });


});

module.exports = router;