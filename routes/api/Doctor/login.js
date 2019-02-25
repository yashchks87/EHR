const express = require('express');
const router = express.Router();
const Doctor = require('../../../models/Doctor');

router.post('/login', (req,res)=>{
    Doctor
      .findOne({Email:req.body.Email})
      .then(user=>{
        if(!user){
          console.log("User not found.");
        }
        else if(user.active === false){
          console.log("Please verify your email first.");
        }
        else if(user.active === true){
          console.log("Login success.");
        }
      })
      .catch(err=>console.log(err));
});

module.exports = router;
