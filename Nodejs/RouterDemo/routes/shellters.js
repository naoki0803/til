const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('all shelters');
});

router.post('/', (req, res) => {
	res.send('Create shelters');
});

router.get('/:id', (req, res) => {
	res.send('view sherter');
});

router.get('/:id/edit', (req, res) => {
	res.send('edit shelter');
});

module.exports = router;