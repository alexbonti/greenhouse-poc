const express = require('express');
const { check, validator, validationResult } = require('express-validator');
const bodyParser = require ('body-parser');


const router = express.Router();

// bodyParse setup
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

module.exports = params => {
  const {client} = params;

  // router.get('/', (req, res, next) => {
    //   try {
    //     return res.render('layout', {
    //       template: 'record'
    //     });
    //   } catch (err) {
    //     console.log("Error rendering record page", err);
    //     return next(err);
    //   }
      
    // })

  const updateArea = (areaID, insectsAmount, date) => {
    if (areaID && insectsAmount && date) {

      console.log("Update area test");

      client.db("greenhouse").collection("areas").updateOne({ areaID: areaID, }, {
        $set: { insectsAmount, date }
      }, (err, result) => {
        
        console.log("Update result", result);

        if (err) {
          console.log("Error when update an answer", err)
        }
      })
    }
  }

    router.post("/", async (req, res, next) => {
      const {areaID, insectsAmount, date} = req.body;

      console.log("Record endpoint check", areaID, insectsAmount, date)

      try {
        //await client.connect();

        if (!areaID || !insectsAmount || !date) {
          return res.status(500).send("Failed")
        }

        // Insert the new update in the general collection
        let generalRecord = await client.db("greenhouse").collection("general").insertOne({ areaID, insectsAmount, date });

        // Update the relevant area with the new input
        updateArea(areaID, insectsAmount, date);

        if (!generalRecord.insertedCount) {
          return res.status(500).send("Failed")
        }

        return res.status(200).send("Succeeded")

      } catch (err) {
        console.log("Error on record endpoint", err);
        return next(err);
      }
      
    });

    router.post("/createArea", async (req, res, next) => {
      const {areaID} = req.body;

      console.log(areaID)

      try {
        //await client.connect()

        const areaGenerated = await client.db("greenhouse").collection("areas").insertOne({ areaID, insectsAmount: null, date: null });

        if (!areaGenerated.insertedCount) {
          return res.status(500).send("Failed")
        }

        return res.status(200).send("Succeeded")

      } catch (err) {
        console.log("Error when create new area", err);
        return next(err);
      }
    })

    return router;
};