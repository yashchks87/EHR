const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PatientSchema = new Schema({
  FirstName : {
    type : String,
    required : true
  },
  LastName : {
    type : String,
    required : true
  },
  Email : {
    type : String,
    required : true
  },
  Mobile : {
    type : String,
    required : true
  },
  Password : {
    type : String,
    required : true
  },
  RePassword : {
    type : String,
    required : true
  },
  Sex : {
    type : String,
    required : true
  },
  authString : {
    type : String
  },
  active : {
    type : Boolean,
    default : false
  }
});
module.exports = Patient = mongoose.model('patients', PatientSchema);
