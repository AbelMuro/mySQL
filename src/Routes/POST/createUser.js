const express = require('express');
const db = require('../../Config/mySQL/db.js');
const router = express.Router();

router.post('/create_user', (req, res) => {
    db.query(`INSERT INTO accounts (email, password) VALUES ?`, [['abelmuro93@gmail.com', 'Darkness33!']], (err, results) => {
        if(err){
            console.log(err, 'Error has occurred');
            res.status(500).send(err.message)
            return;
        }
        res.status(200).send('Successfully added into database')

    })
});

module.exports = router;