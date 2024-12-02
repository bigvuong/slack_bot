const express = require('express');
const cors = require('cors');
require('dotenv').config();  // Load environment variables

const apiRoutes = require('./routes/api');  // Importing routes
const loggerMiddleware = require('./middleware/logger');  // Importing middleware

const app = express();

// Middleware setup
app.use(cors());  // Enable CORS
app.use(express.json());  // Parse incoming JSON bodies
app.use(loggerMiddleware);  // Custom logger middleware

// Routes
app.use('/api', apiRoutes);  // Use API routes

// Error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});