const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Course = new Schema({
    name: {type: 'String'},
    price:  {type: 'Number'},
    discription: {type: 'String', maxLength: 600},
    image: {type: 'String', maxLength: 255}
  });

  module.exports = mongoose.model('Course', Course);