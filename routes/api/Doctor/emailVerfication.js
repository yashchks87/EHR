const express = require('express');
const router = express.Router();
const Doctor = require('../../../models/Doctor');

router.post('/emailverification', (req,res)=>{
  let stringchecking = req.body.authStr;
  let firstslash=0;
  for(var i=0; i<stringchecking.length; i++){
    if(stringchecking[i] === '/'){
      firstslash = i;
    }
  }
  let email = stringchecking.substr(0,20);
  let authString = stringchecking.substr(21);
  Doctor 
    .findOne({Email : email})
    .then(user => {
      if(user.active){
        console.log("Your email is already verified, you can directly progress to login.");
        res.json("Done");
      }
      else if(!user.active){
        if(user.authString == authString){
          Doctor
          .update({Email :email}, {$set:{active : true}})
          .update({Email :email}, {$unset:{authString : ''}})
          .then(()=>console.log('Checking....'))
          .catch(err=>console.log(err));
          res.json("Done");
        }
        else if(user.authString != authString){
          console.log("String is not OK.");
        }
      }
    })
    .catch(err=>console.log(err));
});

module.exports = router; 