export const errorHandler = (err, req, res, next) => {
  console.log(err)
  res.send({ error: err.message })
}
