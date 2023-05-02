
const express  = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const chefs = require('./data/chefs.json')


app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is Running');
});

app.get('/chefs', (req, res)=> {
    res.send(chefs);
})

app.listen(port, ()=> {
    console.log('Server is Runnig On Port ', port);
})