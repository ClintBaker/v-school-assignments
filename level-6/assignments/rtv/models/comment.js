import mongoose, { Schema } from 'mongoose'
import { User } from './user.js'
import { Issue } from './issue.js'

const commentSchema = new Schema({
  text: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  issue: {
    type: Schema.Types.ObjectId,
    ref: 'Issue',
  },
})

export const Comment = mongoose.model('Comment', commentSchema)
