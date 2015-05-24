'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: String,
  //info: String,
  //active: Boolean
  rollNumber: String,
  email: String,
  department : {type : Schema.Types.ObjectId, ref: department};
});

module.exports = mongoose.model('Student', StudentSchema);