import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'
import { expressjwt } from 'express-jwt'

import authRouter from './routes/auth.js'
import { errorHandler } from './modules/error.js'
import { main } from './modules/db.js'
import issueRouter from './routes/issue.js'

// instantiate app
const app = express()

// connect to db
main().catch((e) => console.log(e))

// middleware
app.use(morgan('dev'))
app.use(express.json())
// protect
app.use(
  '/api',
  expressjwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] })
)

// routes
app.use('/auth', authRouter)
app.use('/api/issue', issueRouter)

// error handler
app.use(errorHandler)

// listen
const PORT = 8005
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))
