const express = require('express');
// const { check, validator, validationResult } = require('express-validator');
const bodyParser = require ('body-parser');


const router = express.Router();

// bodyParse setup
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

module.exports = params => {
    const {client} = params;

    router.get("/", async (req, res, next) => {
        
        try {
            await client.connect();

            let greenhouseData = await client.db("greenhouse").collection("areas").find({}).toArray();

            // greenhouseData.forEach(element => {
            //     let testTime = new Date(element.timeStamp * 100000000);
            //     console.log(testTime)
            // });

            return res.render('layout', {
                template: 'dashboard',
                greenhouseData
            })

        } catch (err) {
            console.log("Error on dashboard enpoint", err);
            return next(err);
        }

      });

    return router;
};