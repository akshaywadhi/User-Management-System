const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

  name : {type : String, required : true},
  email : {type : String, required : true},
  city : {type : String, required : true},
  country : {type : String, required : true},
  age : {type : Number, required : true},

})


const userModel = mongoose.model('users', userSchema)

module.exports = userModel