const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const app = express();
const doctor_register = require('./routes/api/Doctor/register');
const patient_register = require('./routes/api/Patient/register');
const paramedic_register = require('./routes/api/Paramedic/register');
const doctor_login = require('./routes/api/Doctor/login');
const paramedic_login = require('./routes/api/Paramedic/login');
const patient_login = require('./routes/api/Patient/login');
const port = process.env.PORT || 5001;
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

// Server static assets if in production
if(process.env.NODE_ENV === 'production'){
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use('/api/routes/doctor', doctor_register);
app.use('/api/routes/patient', patient_register);
app.use('/api/routes/paramedic', paramedic_register);
app.use('/api/routes/doctor', doctor_login);
app.use('/api/routes/patient', patient_login);
app.use('/api/routes/paramedic', paramedic_login);

app.listen(port);
