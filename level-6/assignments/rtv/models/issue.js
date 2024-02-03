import mongoose, { Schema } from 'mongoose'
import { User } from './user.js'
import { Comment } from './comment.js'

const issueSchema = new Schema({
  title: String,
  description: String,
  upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  totalVotes: {
    type: Number,
    default: 0,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
})

issueSchema.pre('save', function (next, options) {
  this.totalVotes = this.upvotes.length + this.downvotes.length
  next()
})

export const Issue = mongoose.model('Issue', issueSchema)
