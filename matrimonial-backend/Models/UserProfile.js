const mongoose = require('mongoose');
const { Schema } = mongoose;

const userProfile = new Schema({
  username: String,
  email: { type: String, required: true, unique: true },
  bio: String,
  createdAt: { type: Date, default: Date.now },
  Firstname: String,
  Middlename: String,
  Lastname: String,
  age: Number,
  religion: String,
  caste: String,
  education: String,
  height: Number, // cm
  weight: Number, // kg
  motherTongue: String,
  maritalStatus: { type: String, enum: ['Single', 'Married', 'Divorced', 'Widowed'] },
  contactNumber: String,
  country: String,
  state: String,
  city: String,
  occupation: String
});

module.exports = mongoose.model('userProfile', userProfile);
