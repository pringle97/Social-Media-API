const { Schema, model } = require('mongoose')

const Thought = new Schema({
  body: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  reactions: [{
    type: Schema.Types.ObjectId,
    ref: 'reaction',
  }]
}, { timestamps: true })

Thought.virtual('reactionCount').get(function () {
  return this.reactions.length
})

module.exports = model('thought', Thought)