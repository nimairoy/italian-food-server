
const express  = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');


app.use(cors());

// server testing
app.get('/', (req, res) => {
    res.send('Server is Running');
});

// all chef loading
app.get('/chefs', (req, res)=> {
    res.send(chefs);
});

// single data loading
app.get('/chefs/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const selectedChef = chefs.find(chef => chef.id === id)
    console.log(id)
    res.send(selectedChef);
    
});

// all recipes loading
app.get('/recipes', (req, res) => {
    res.send(recipes);
});

// single recipes loading
app.get('/recipes/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const selectedRecipe = recipes.filter(recipe => recipe.recipe_id === id)
    res.send(selectedRecipe);
})

// port calling
app.listen(port, ()=> {
    console.log('Server is Runnig On Port ', port);
});