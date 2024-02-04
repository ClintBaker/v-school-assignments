import { Issue } from '../models/issue.js'

export const getUserIssues = async (req, res, next) => {
  try {
    // get issues with user of req.auth.id
    const issues = await Issue.find({
      user: req.auth.id,
    })
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
    // return issues
    res.status(200).send({ issues })
  } catch (e) {
    res.status(500)
    return next(e)
  }
}

export const createIssue = async (req, res, next) => {
  try {
    // create issue
    const issue = await Issue.create({ ...req.body, user: req.auth.id })
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
      user: req.auth.id,
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
    if (issue.user.toString() !== req.auth.id) {
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
