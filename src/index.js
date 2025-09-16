const express = require('express');
const app = express();                                      
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, (error) => {
    if(error){
        console.log(error, 'error occured');
        return;
    }
    console.log(`Server is running on port ${port}`);
});   