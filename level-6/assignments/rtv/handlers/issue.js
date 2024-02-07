import { Issue } from '../models/issue.js'

export const getUserIssues = async (req, res, next) => {
  try {
    // get issues with user of req.auth.id (populate comments & username of comments)
    const issues = await Issue.find({
      user: req.auth._id,
    })
      .populate({
        path: 'comments',
        populate: {
          path: 'user',
          select: 'username',
          model: 'User',
        },
      })
      .exec()
    res.status(200).send({ issues })
  } catch (e) {
    res.status(500)
    return next(e)
  }
}

export const getIssues = async (req, res, next) => {
  try {
    // get all issues
    const issues = await Issue.find()
      .populate({
        path: 'comments',
        populate: {
          path: 'user',
          select: 'username',
          model: 'User',
        },
      })
      .exec()
    // return issues
    res.status(200).send({ issues })
  } catch (e) {
    res.status(500)
    return next(e)
  }
}

export const createIssue = async (req, res, next) => {
  try {
    console.log(req.auth._id)
    // create issue
    const issue = await Issue.create({ ...req.body, user: req.auth._id })
    res.status(201).send({ issue })
  } catch (e) {
    res.status(500)
    return next(e)
  }
}

export const editIssue = async (req, res, next) => {
  try {
    // get the issue and make sure the user matches req.auth.id
    const issue = await Issue.findOne({
      _id: req.params.issueId,
      user: req.auth._id,
    })

    // if there isn't an issue matching user and request id
    if (!issue) {
      res.status(400)
      return next(new Error('Resource Not Found'))
    }

    // edit the issue
    Object.keys(req.body).map((key) => {
      issue[key] = req.body[key]
    })
    // save the issue
    await issue.save()

    // response
    res.status(200).send({ issue })
  } catch (e) {
    res.status(500)
    return next(e)
  }
}

export const deleteIssue = async (req, res, next) => {
  try {
    // get the issue based on param
    const issue = await Issue.findById(req.params.issueId)
    // make sure the user is the owner
    if (issue.user.toString() !== req.auth._id) {
      res.status(401)
      return next(new Error('Unauthorized'))
    }
    // delete issue
    await issue.deleteOne()
    // result
    res.status(200).send({ message: 'Issue succesfully deleted' })
  } catch (e) {
    return next(e)
  }
}

export const upvoteIssue = async (req, res, next) => {
  try {
    // get issue
    const issue = await Issue.findById(req.params.issueId)
    if (!issue) {
      res.status(400)
      return next(new Error('Issue not found'))
    }
    // check if user has already upvoted
    const hasUpvoted = issue.upvotes.find(
      (id) => id.toString() === req.auth._id
    )
    // if they already have just send back an error
    if (hasUpvoted) {
      res.status(400)
      return next(new Error('Issue already upvoted'))
    }
    // if not upvote
    issue.upvotes.push(req.auth._id)
    // check if user has already downvoted
    const hasDownvoted = issue.downvotes.find(
      (id) => id.toString() === req.auth._id
    )
    // if so remove from downvotes
    if (hasDownvoted) {
      issue.downvotes.pop(req.auth._id)
    }
    // save issue
    await issue.save()
    // response
    res.status(200).send({ issue })
  } catch (e) {
    return next(e)
  }
}

export const downvoteIssue = async (req, res, next) => {
  // get issue
  const issue = await Issue.findById(req.params.issueId)
  // check if the user has already downvoted
  const hasDownvoted = issue.downvotes.find(
    (id) => id.toString() === req.auth._id
  )
  // if they have send back error
  if (hasDownvoted) {
    res.status(400)
    return next(new Error('Issue already downvoted'))
  }
  // if not downvote
  issue.downvotes.push(req.auth._id)
  // check if the user has already upvoted
  const hasUpvoted = issue.upvotes.find((id) => id.toString() === req.auth._id)
  // if so remove from downvotes
  if (hasUpvoted) {
    issue.upvotes.pop(req.auth._id)
  }
  // save issue
  await issue.save()
  // response
  res.status(200).send({ issue })
}
