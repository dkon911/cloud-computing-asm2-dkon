const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: 'String', required: true },
  price: { type: 'Number' },
  discription: { type: 'String' },
  image: { type: 'String' },
  slug: { type: String, slug: 'name', unique: true },
});

module.exports = mongoose.model('Course', Course);