const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
	if (req.query.isAdmin) {
		return next();
	}
	res.send('not admin');
});


router.get('/secret', (req, res) => {
	res.send('secret');
});

router.get('/deleteall', (req, res) => {
	res.send('delete all');
});

module.exports = router;