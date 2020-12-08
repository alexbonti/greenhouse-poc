const express = require('express');
const { check, validator, validationResult } = require('express-validator');
const bodyParser = require ('body-parser');


const router = express.Router();

// bodyParse setup
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

module.exports = params => {
  const {client} = params;

    router.get('/', (req, res) => {
      res.render('layout', {
        template: 'record'
      });
    })

    router.get("/save", async (req, res) => {
      const {areaID, insectsAmount, timeStamp} = req.query;

      try {
        await client.connect();

        let saveRecord = await client.db("greenhouse").collection("test").insertOne( {areaID, insectsAmount, timeStamp} )

        if (!saveRecord.insertedCount) {
          res.send("Failed")
        }

        res.send("Succeeded")

      } catch (err) {
        console.log(err);
      }
      
    });

    return router;
};