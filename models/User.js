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
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
      },
      message: 'Please enter a valid email'
    },
    required: [true, 'Email required']
  },
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'thought'
  }],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  ]

},

  {
    toJSON: {
      virtuals: true
    },
    id: false
  })

User.virtual('friendCount').get(function () {
  return this.friends.length
})

module.exports = model('user', User)