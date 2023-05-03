const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
 
const recipes = require('./data/recipe.json')
const chefs = require('./data/chefs.json')
 
app.use(cors())
app.get('/', (req,res) => {
        res.send('food is running')
})

app.get('/chefs', (req,res) => {
        res.send(chefs)
} )

app.get('/recipes', (req,res) => {
        res.send(recipes)
     })

app.get('/chef/:id', (req,res)=> {
        const id = req.params.id;
  const singleChef = chefs.find(chef => chef.id ==id) || [];
  res.send(singleChef);
})



app.listen(port, () => {
        console.log(`the food is running now ${port}`)
})