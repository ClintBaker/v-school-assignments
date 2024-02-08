import mongoose, { Schema } from 'mongoose'
import { Issue } from './issue.js'
import { Comment } from './comment.js'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  issues: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Issue',
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
})

// pre-save hook to encrypt user passwords on signup
userSchema.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) return next()
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err)
    user.password = hash
    next()
  })
})

// schema method to compare encrypted passwords on login
userSchema.methods.checkPassword = function (passwordAttempt, callback) {
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
    if (err) return callback(err)
    return callback(null, isMatch)
  })
}

// schema method to remove password for sending response to front end
userSchema.methods.withoutPassword = function () {
  const user = this.toObject()
  delete user.password
  return user
}

export const User = mongoose.model('User', userSchema)
