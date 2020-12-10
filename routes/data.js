const express = require('express');
// const { check, validator, validationResult } = require('express-validator');
const bodyParser = require ('body-parser');


const router = express.Router();

// bodyParse setup
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

module.exports = params => {
  const {client} = params;

    router.get("/pod", async(req, res,next) => {
       
        try {
          const podId = req.query._id;
          //console.log('Pod Requested dsaf',podId)
          let podHistory = await client.db("greenhouse").collection("general").find({"_id":ObjectId("")}).toArray();
          console.log(podHistory)
  
          res.end("Hello " + podHistory + "!");

        } catch (err) {
            console.log("Error on dashboard enpoint", err);
            return next(err);
        }
      });

    return router;
};