const router = require('express').Router();
const bookRoutes = require('./books');
const path = require('path');

// API routes
router.use('/api/books', bookRoutes);

let temp = __dirname + '../client/build/index.html'
temp = temp.slice(3, temp.length)

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(temp));
});


module.exports = router;