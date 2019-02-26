const express = require('express');
const router = express.Router();
const Paramedic = require('./Paramedic');

router.post('/login', (req,res)=>{
    Paramedic
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
