const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Package name is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  duration: {
    type: String,
    required: [true, 'Duration is required']
  },
  posts: {
    type: Number,
    required: true
  },
  stories: {
    type: Number,
    required: true
  },
  followers: {
    type: String,
    required: true
  },
  features: [{
    type: String
  }],
  description: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Package', packageSchema);


