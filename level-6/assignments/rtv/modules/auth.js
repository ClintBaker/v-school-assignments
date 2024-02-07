import { User } from '../models/user.js'
import jwt from 'jsonwebtoken'

export const createJWT = (user) => {
  const token = jwt.sign(user.withoutPassword(), process.env.JWT_SECRET)
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
    const newUser = new User(req.body)
    const savedUser = await newUser.save()
    //   once user is created create a token for the user
    const token = createJWT(savedUser)
    //   send back user and token
    res.status(201).send({ user: savedUser.withoutPassword(), token })
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
    user.checkPassword(req.body.password, (err, isMatch) => {
      if (err) {
        res.status(403)
        return next(new Error('ERROR'))
      }
      if (!isMatch) {
        res.status(403)
        return next(new Error('Username or password is incorrect'))
      }
      // get a token
      const token = createJWT(user)
      // return user and a token
      res.status(200).send({ user: user.withoutPassword(), token })
    })
  } catch (e) {
    return next(e)
  }
}
