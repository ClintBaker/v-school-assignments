import { Comment } from '../models/comment.js'
import { Issue } from '../models/issue.js'
import { User } from '../models/user.js'

export const createComment = async (req, res, next) => {
  try {
    // get the issue
    const issue = await Issue.findById(req.params.issueId)
    // if issue doesn't exist throw error
    if (!issue) {
      res.status(404)
      return next(new Error('Issue not found'))
    }
    // otherwise create comment
    const comment = await Comment.create({
      text: req.body.text,
      user: req.auth.id,
      issue: req.params.issueId,
    })
    // associate comment with user
    issue.comments.push(comment._id)
    await issue.save()
    // send response
    res.status(201).send({ comment, message: 'Comment successfully created' })
  } catch (e) {
    res.status(500)
    return next(e)
  }
}

export const deleteComment = async (req, res, next) => {
  try {
    // get the issue
    const issue = await Issue.findById(req.params.issueId)
      .populate({
        path: 'comments',
        populate: {
          path: 'user',
          select: 'username',
          model: 'User',
        },
      })
      .exec()
    // if no issue error
    if (!issue) {
      res.status(404)
      return next(new Error('Issue not found'))
    }
    // find comment
    const comment = issue.comments.find(
      (comment) => comment._id.toString() === req.params.commentId
    )
    // if no comment error
    if (!comment) {
      res.status(404)
      return next(new Error('Comment not found'))
    }
    // validate user owns comment
    const isOwner = comment.user._id.toString() === req.auth.id
    if (!isOwner) {
      res.status(401)
      return next(new Error('Unauthorized'))
    }
    // -- DELETE COMMENT
    // get user
    const user = await User.findById(req.auth.id)
    // remove from user's comments
    user.comments.pop(comment._id)
    // remove from issue's comments
    issue.comments.pop(comment._id)
    // save user & issue & delete comment
    await user.save()
    await issue.save()
    await comment.deleteOne()
    // respond
    res.status(200).send({ message: 'Comment succesfully deleted' })
  } catch (e) {
    res.status(500)
    return next(e)
  }
}
