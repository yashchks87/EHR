const express = require('express');
const router = express.Router();
const Patient = require('../../../models/Patient');

router.post('/login', (req,res)=>{
    Patient
      .findOne({Email:req.body.Email})
      .then(user=>{
        if(!user){
          console.log("User not found.");
        }
        else{
          console.log("User found!");
        }
      })
      .catch(err=>console.log(err));
});

module.exports = router;
