const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DoctorSchema = new Schema({
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
  Specialize : {
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
  active : {
    type : Boolean,
    default : false
  },
  authString : {
    type : String,
  }
});
module.exports = Doctor = mongoose.model('doctors', DoctorSchema);
