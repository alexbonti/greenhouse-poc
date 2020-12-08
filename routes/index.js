const express = require('express');
const router = express.Router();

const test = require('./test');
const recordRoute = require('./record');


module.exports = (params) => {
    // router.get('/', (req, res) => {
    //     res.send("Hello!!!!")
    // });

    router.use('/test', test());
    router.use('/record', recordRoute(params));


    return router;
};