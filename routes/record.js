const express = require('express');
const { check, validator, validationResult } = require('express-validator');
const bodyParser = require ('body-parser');


const router = express.Router();

// bodyParse setup
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

module.exports = params => {
  const {client} = params;

    router.get('/', (req, res, next) => {
      try {
        return res.render('layout', {
          template: 'record'
        });
      } catch (err) {
        console.log("Error rendering record page", err);
        return next(err);
      }
      
    })

    router.post("/", async (req, res, next) => {
      const {areaID, insectsAmount, timeStamp} = req.query;

      try {
        await client.connect();

        let saveRecord = await client.db("greenhouse").collection("test").insertOne( {areaID, insectsAmount, timeStamp} )

        if (!saveRecord.insertedCount) {
          return res.status(500).send("Failed")
        }

        return res.status(200).send("Succeeded")

      } catch (err) {
        console.log("Error on record endpoint", err);
        return next(err);
      }
      
    });

    return router;
};