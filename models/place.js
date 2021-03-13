const mongoose = require('mongoose');

const { Schema } = mongoose;

const placeLocaleSchema = new Schema({
  _id: false,
  lang: {
    type: String,
    required: true,
  },
  name: String,
  description: String,
});

const placeSchema = new Schema({
  countryId: {
    type: Schema.Types.ObjectId,
    ref: 'Country',
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  localizations: [placeLocaleSchema],
});

module.exports = mongoose.model('Place', placeSchema);
