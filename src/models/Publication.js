const { Schema, model, Types } = require('mongoose');

const publicationSchema = new Schema({
  is_active: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 100,
  },
  media_url: {
    type: String,
    required: true,
  },
  place: {
    type: String,
  },
  user: [
    {
      type: Types.ObjectId,
      ref: 'User',
    },
  ],
}, {
  timestamps: true,
  versionKey: false,
});

const Publication = model('Publication', publicationSchema);
module.exports = Publication;
