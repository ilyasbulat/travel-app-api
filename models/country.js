const mongoose = require('mongoose');

const { Schema } = mongoose;

const localeSchema = new Schema({
  _id: false,
  lang: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const countrySchema = new Schema({
  imageUrl: String,
  videoUrl: String,
  currency: {
    type: String,
    required: true,
  },
  capitalLocation: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  localizations: [localeSchema],
});

module.exports = mongoose.model('Country', countrySchema);
