require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');

//Config
app.set('port', process.env.PORT || 8080);
//app.use(cors);

//Config bodyParser for AJAX request
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//DB connection
require('./models');

//passport
//app.use(passport.initialize());
//require('./config/passport/')(passport);

//app.use(express.static('client/build'));
app.use(routes);

app.listen(app.get('port'), (err)=> {
    err ? console.log(err) : console.log(`[server] Server listening on port ${app.get('port')}`);
});