const express = require('express');
const db = require('../../Config/mySQL/db.js');
const router = express.Router();

router.post('/create_user', (req, res) => {
    db.query('SELECT * FROM', () => {
        
    })
});

module.exports = router;