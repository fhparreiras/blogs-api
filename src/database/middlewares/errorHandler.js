const errorHandler = (error, req, res, next) => {
  console.log('ERROR', error.message);
  res.status(error.status || 500).json({ message: error.message });
  next();
};

module.exports = errorHandler;
