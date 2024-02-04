import { Router } from 'express'
import {
  createIssue,
  getIssues,
  getUserIssues,
  editIssue,
  deleteIssue,
  upvoteIssue,
  downvoteIssue,
} from '../handlers/issue.js'
import { createComment, deleteComment } from '../handlers/comment.js'

const issueRouter = Router({ mergeParams: true })

// Issue requests
issueRouter.get('/', getIssues)
issueRouter.get('/user', getUserIssues)
issueRouter.post('/', createIssue)
issueRouter.put('/:issueId', editIssue)
issueRouter.delete('/:issueId', deleteIssue)
issueRouter.put('/:issueId/upvote', upvoteIssue)
issueRouter.put('/:issueId/downvote', downvoteIssue)

// Comment request
issueRouter.post('/:issueId/comment', createComment)
issueRouter.delete('/:issueId/comment/:commentId', deleteComment)

export default issueRouter
