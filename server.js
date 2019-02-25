const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').MONGO_URI;
const app = express();
const doctor_register = require('./routes/api/Doctor/register');
const patient_register = require('./routes/api/Patient/register');
const paramedic_register = require('./routes/api/Paramedic/register');
const doctor_login = require('./routes/api/Doctor/login');
const paramedic_login = require('./routes/api/Paramedic/login');
const patient_login = require('./routes/api/Patient/login');
// To get values form the different forms.
const bodyParser = require('body-parser');
// Middleware function values....
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
// Mongoose connection...
mongoose
  .connect(db, {useNewUrlParser:true})
  .then(()=>console.log("Mlab Connected"))
  .catch(err=>console.log(err));

app.get('/', (req,res)=>{
  res.send('Hello world');
});

app.use('/api/routes/doctor', doctor_register);
app.use('/api/routes/patient', patient_register);
app.use('/api/routes/paramedic', paramedic_register);
app.use('/api/routes/doctor', doctor_login);
app.use('/api/routes/patient', patient_login);
app.use('/api/routes/paramedic', paramedic_login);

app.listen(5001);
