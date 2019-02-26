const express = require('express');
const router = express.Router();
const Doctor = require('../../../models/Doctor');

router.post('/doctor/emailverification', (req,res)=>{
  Doctor
    .findOne({email:req.body.email})
});
