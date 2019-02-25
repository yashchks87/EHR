const express = require('express');
const router = express.Router();
const randomString = require('randomstring');
const mailFile = require('../mailSender');
const Doctor = require('../../../models/Doctor');

router.post('/register', (req,res)=>{
  Doctor
    .findOne({Email:req.body.Email})
    .then(user=>{
      if(user){
        console.log("User already exists.");
      }
      else{
        var authString = randomString.generate(100);
        const newDoctor = new Doctor({
          FirstName : req.body.FirstName,
          LastName : req.body.LastName,
          Email : req.body.Email,
          Mobile : req.body.Mobile,
          Specialize : req.body.Specialize,
          Password : req.body.Password,
          RePassword : req.body.RePassword,
          Sex : req.body.Sex,
          authString : authString
        });
        newDoctor
          .save()
          .then(()=>{
            console.log("Data added successfully.");
            let mailObject = {
              toEmail : req.body.Email,
              Subject : 'Email verification for Electronic Health Records',
              url : 'localhost:5001/emailverification/doctor/',
              randomString : authString
            }
            mailFile.sender(mailObject);
          })
          .catch(err=>console.log(err));
      }
    })
    .catch(err=>console.log(err));
});

module.exports = router;
