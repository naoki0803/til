const express = require('express');
const router = express.Router();

router.get('/', (reqa, res) => {
    res.send('All dogs');
});

router.post('/', (req, res) => {
    res.send('Create dog');
});

router.get('/:id', (req, res) => {
    res.send('show dogs')
});

router.get('/:id/edit', (req, res) => {
    res.send('edit dog');
});

module.exports = router;