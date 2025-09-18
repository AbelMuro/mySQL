const express = require('express');
const db = require('../../Config/mySQL/db.js');
const router = express.Router();

router.post('/create_user', (req, res) => {
    const {email, password} = req.body;

    db.execute('INSERT INTO accounts (email, password) VALUES (?, ?)', [email, password], (err, results) => {
        if(err){
            console.log('Error has occurred', err.message);
            res.status(501).send(err.message);
            return
        }
        console.log(results);
        res.status(200).send('user has been successfully created');
    });
});

module.exports = router;