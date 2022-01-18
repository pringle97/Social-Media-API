const { Schema, model } = require('mongoose')

const User = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v)
      }, 
  }
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'thought'
  }]
}, { timestamps: true })

User.plugin(require('passport-local-mongoose'))

module.exports = model('user', User)