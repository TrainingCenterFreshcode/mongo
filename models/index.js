const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const DB = process.env.DB_NAME || 'fe-test';

mongoose.connect(`mongodb://localhost:27017/${DB}`);

const saladSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  weight: Number,
  ingredients: {
    type: Array,
    required: true
  },
  sauce: String,
  dietType: String,
  spicy: Boolean,
  expired: {
    type: Date,
    required: true,
    validate: {
      validator: (value) => value >= new Date() // перевірка на те, щоб термін придатності був >= сьогоднішній даті
    }
  }
});

const Salad = mongoose.model('Salad', saladSchema);

module.exports = {
  Salad
}

/*

Salads

name - string
weight - double
ingredients - array
sauce - string
dietType - string
spicy - bool
expired_date - date

*/