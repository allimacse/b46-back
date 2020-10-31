const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

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

userSchema.pre('save', async function(next) {
  try {
    const user = this;
    if (!user.isModified('password')) return next();
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    return next();
  } catch (error) {
    next(error);
  }
});

const User = model('User', userSchema);
module.exports = User;
