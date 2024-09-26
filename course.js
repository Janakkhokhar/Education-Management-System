const express = require('express');

const Passport = require('passport');

const routes = express.Router();

const courseController = require('../controller/coursecontroller');

routes.post('/add_course', Passport.authenticate("userverify", { failureRedirect: "/user/faillogin" }), courseController.add_course);

routes.get('/viewcourse', Passport.authenticate("userverify", { failureRedirect: "/user/faillogin" }), courseController.viewcourse);

routes.put('/editcourse/:id', Passport.authenticate("userverify", { failureRedirect: "/user/faillogin" }), courseController.editcourse);

routes.delete('/deletecourse/:id', Passport.authenticate("userverify", { failureRedirect: "/user/faillogin" }), courseController.deletecourse);







module.exports = routes;