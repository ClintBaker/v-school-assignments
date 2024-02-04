import { Router } from 'express'
import {
  createIssue,
  getIssues,
  getUserIssues,
  editIssue,
  deleteIssue,
} from '../handlers/issue.js'

const issueRouter = Router()

issueRouter.get('/', getIssues)
issueRouter.get('/user', getUserIssues)
issueRouter.post('/', createIssue)
issueRouter.put('/:issueId', editIssue)
issueRouter.delete('/:issueId', deleteIssue)

export default issueRouter
