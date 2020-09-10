const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  interests: {
    type: [String]
  },
  dob: {
    type: Date
  }
});

const User = mongoose.model('Users', userSchema);
module.exports = User;
