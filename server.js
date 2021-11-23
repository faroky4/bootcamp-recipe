const express = require('express')
const path = require('path')
const { recip } = require('prelude-ls')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

app.get('/sanity', function (request, response) {
    console.log("ok")
})

app.get('/recipes/:ingredient', function (request, response) {
    const ingre = request.params.ingredient
    console.log(ingre)

    var urllib = require('urllib');

    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingre}`, function (err, data, res) {
        if (err) {
          throw err; // you need to handle error
        }

        const recipesData = data.toString()
        const jsonData = JSON.parse(recipesData)
        console.log(jsonData);

        const finalrecipes = jsonData.results.map((recipe) => {
            return {
                ingredients : recipe.ingredients,
                title: recipe.title,
                thumbnail: recipe.thumbnail,
                href: recipe.href
            }
        })
         response.send({recipesFinalData : finalrecipes})
    });
})