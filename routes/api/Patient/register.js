const express = require('express');
const router = express.Router();
const mailFile = require('../mailSender');
const Patient = require('../../../models/Patient');
// router.get('/', (req,res)=>{
//   res.send('Hello');
// });

router.post('/register', (req,res)=>{
  Patient
    .findOne({Email:req.body.Email})
    .then(user=>{
      if(user){
        console.log("User already exists.");
      }
      else{
        const authString = randomString.generate(100);
        const newPatient = new Patient({
          FirstName : req.body.FirstName,
          LastName : req.body.LastName,
          Email : req.body.Email,
          Mobile : req.body.Mobile,
          Password : req.body.Password,
          RePassword : req.body.RePassword,
          Sex : req.body.Sex
        });
        newPatient
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
