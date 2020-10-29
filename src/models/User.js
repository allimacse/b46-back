const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  is_active: {
    type: Boolean,
    default: true,
  },
  profile_img: {
    type: String,
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSK4CtEzasggWicJhMXCuOHcPHWj8vHga4GSA&usqp=CAU',
  },
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  bith_date: {
    type: Date,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamps: true, versionKey: false });

const User = model('User', userSchema);
module.exports = User;
