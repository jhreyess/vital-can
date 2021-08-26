const router = require('express').Router();
const bcrypt = require("bcryptjs");

const validateLoginInput = require("../../validations/login");
const validateRegisterInput = require("../../validations/register");
const User = require('../../models/usersModel');

router.post('/register', (req, res) => {

    const {
        errors,
        isValid
    } = validateRegisterInput(req.body);
    
    // Check validation
    if (!isValid) {return res.status(400).json(errors);}

    //if no errors
    const newuser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        telephone: req.body.telephone,
        address: req.body.address,
        role: req.body.role,
    });

    bcrypt.hash(newuser.password, 10, function(err, hash){        
        if(err) throw err;
        newuser.password = hash;
        newuser.save().then(console.log("user registered")).catch(err => console.log(err));
    })
});

router.post('/login', (req, res) => {
    //Form validation
    const{
        errors,
        isValid
    } = validateLoginInput(req.body);

    //If errors return a bad response
    if(!isValid){return res.status(400).json(errors)}

    //if no errors 

    //MongoDB find user - if not return 404
    User.findOne({
        email: req.body.email
    }).then(user=>{

        if(!user){
            return res.status(404).json({
                emailnotfound: "Email not found"
            });
        }

        //Compare password
        bcrypt.compare(req.body.password, user.password, function(err, isValid){
            if(err) throw err;
            if(isValid){
                return res.json({success: true, role: user.role}); //OK
            }else{
                return res.status(401).json({passwordincorrect: "Password incorrect"});
            }
        });

    });
});

module.exports = router;