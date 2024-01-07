export const middleware = (req, res, next) => {
  req.body = { data: "aslkfj32asdf" };
  next();
};
