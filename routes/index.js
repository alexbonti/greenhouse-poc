const express = require('express');
const router = express.Router();

const test = require('./test');
const recordRoute = require('./record');
const dashboardRoute = require('./dashboard');



module.exports = (params) => {
    router.get('/', (req, res) => {
        res.render('layout', {
            template: 'home'
        });
    })

    router.use('/test', test());
    router.use('/record', recordRoute(params));
    router.use('/dashboard', dashboardRoute(params));



    return router;
};