const { Schema, model } = require('mongoose')

const Reaction = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    //default value set to new objectId
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
  },
  createdAt: {
    type: Date
    //set default value to current timestamp
    //use getter method to format timestamp on query
  }
})