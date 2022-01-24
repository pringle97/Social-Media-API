const { Schema, model } = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./Reaction');

const Thought = new Schema({
  thoughtText: {
    type: String,
    minlength: 1,
    maxlength: 280,
    required: true

  },
  createdAt: {
    type: Date
    default: Date.now,
    get: (createdAtVal) => moment(createdAtVal).format('MM DD, YYY [at] hh:mm a')
  },
  username: {
    type: String,
    ref: 'user',
    required: true
  },
  reactions: [reactionSchema]
}, 
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
})

Thought.virtual('reactionCount').get(function () {
  return this.reactions.length
})

module.exports = model('thought', Thought);