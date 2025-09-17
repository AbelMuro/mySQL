const express = require('express');
const cors = require('cors');
const createUser = require('./Routes/POST/createUser.js');
const app = express();                                      
const port = 4000;


app.use(express.json());
app.use(cors({
    origin: '*',
    allowedHeaders: ['Content-Type'],
    methods: ['POST', 'GET'],
}))

app.use(createUser);

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