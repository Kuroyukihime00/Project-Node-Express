const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const indexRouter = require('./routes/index');

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the index router
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
