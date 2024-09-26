const express = require('express');

const port = 9011;

const passport = require('passport')

const session = require('express-session');

const db = require('./cofig/mongoose');
const jwt = require('./cofig/passport-jwt-stratergy');

const app = express();

app.use(
    session({
        name: "jwtPractical",
        secret: "jwtPractical",
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 100,
        },
    })
)

app.use(passport.initialize());
app.use(passport.session())

app.use(express.urlencoded())

app.use('/user', require('./routes/user'));
app.use('/course', require('./routes/course'));
app.use('/grade', require('./routes/grade'));


app.listen(port, (err) => {
    (err) ? console.log("server is connect ") : console.log("server is connect");

})