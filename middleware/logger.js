// Custom logger middleware to log request details
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} - ${new Date().toISOString()}`);
  next();  // Pass control to the next middleware/route
};

module.exports = loggerMiddleware;
