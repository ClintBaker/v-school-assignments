import mongoose, { Schema } from 'mongoose'
import { Issue } from './issue.js'
import { Comment } from './comment.js'

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

export const User = mongoose.model('User', userSchema)
