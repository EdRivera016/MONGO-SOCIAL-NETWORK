const express = require('express');
const routes = require('./routes');
const db = require('./config/db');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Connect to MongoDB
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
