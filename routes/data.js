const express = require('express');
// const { check, validator, validationResult } = require('express-validator');
const bodyParser = require ('body-parser');


const router = express.Router();

// bodyParse setup
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

module.exports = params => {
    router.get("/pod", (req, res) => {
        const podId = req.query._id;
        console.log('Pod Requested dsaf',podId)
        res.end("Hello " + podId + "!");
      });

    return router;
};