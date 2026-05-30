const express = require('express');
const path = require('path');
const hbs = require('hbs');

// MongoDB connection
require('./app_server/models/db');
require('./app_server/models/trips');

const apiRoutes = require('./app_api/routes/index');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up views
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Website routes
const routes = require('./app_server/routes/index');
app.use('/', routes);

// API routes
app.use('/api', apiRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});