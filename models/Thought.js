const { Schema, model } = require('mongoose')

const Thought = new Schema({
  thoughtText: {
    type: String,
    maxlength: 280,
    required: true

  },
  createdAt: {
    type: Date
    //set default value to current timestamp
    //use getter method to format timestamp on query
  },
  username: {
    type: String,
    ref: 'user',
    required: true
  },
  reactions: [{
    type: Schema.Types.ObjectId,
    ref: 'reaction'
  }]
}, { timestamps: true })

Thought.virtual('reactionCount').get(function () {
  return this.reactions.length
})

module.exports = model('thought', Thought)