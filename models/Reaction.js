const { Schema, model } = require('mongoose');
const moment = require('moment');

const Reaction = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    ref: 'user',
    required: true
  }
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  //   get: (createdAtVal) => moment(createdAtVal).format('MM DD, YYY [at] hh:mm a')
  // }
}, 
{
  toJSON: {
    getters: true
  },
  id: false
})

module.exports = model('reaction', Reaction);