const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Got a GET request!!')
});
router.post('/items', (req, res) => {
    res.json({x:1 , y:2 , z:3});
});
router.put('/items/:id', (req, res) => {
    res.send('Got a PUT request!!')
});
router.delete('/items/:id', (req, res) => {
    res.send('Got a DELETE request!!')
});

module.exports = router;