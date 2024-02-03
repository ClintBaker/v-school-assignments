import { User } from '../models/user.js'
import jwt from 'jsonwebtoken'

export const createJWT = (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET
  )
  return token
}

export const signUp = async (req, res, next) => {
  try {
    //   find the user
    const user = await User.findOne({
      username: req.body.username.toLowerCase(),
    })
    // check if user already exists
    if (user) {
      res.status(403)
      const error = new Error('User Already Exists')
      return next(error)
    }
    //   create the user in the db
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    })
    //   once user is created create a token for the user
    const token = createJWT(newUser)
    //   send back user and token
    res.status(201).send({ user: newUser, token })
  } catch (e) {
    return next(e)
  }
}

export const signIn = async (req, res, next) => {
  try {
    // find the user
    const user = await User.findOne({
      username: req.body.username.toLowerCase(),
    })
    // if user doesn't exist return an error
    if (!user) {
      res.status(404)
      const err = new Error('User not found')
      return next(err)
    }
    // compare passwords
    if (user.password !== req.body.password) {
      res.status(401)
      const err = new Error('Unauthorized')
      return next(err)
    }
    // get a token
    const token = createJWT(user)
    // return user and a token
    res.status(200).send({ user, token })
  } catch (e) {
    return next(e)
  }
}
