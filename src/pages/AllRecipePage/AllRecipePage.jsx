import React, { useState, useEffect } from 'react'
import { checkToken } from '../../utilities/users-service'
import AllRecipes from '../../components/AllRecipes/AllRecipes'
import * as recipeAPI from '../../utilities/recipe-api' 

export default function AllRecipePage() {
  const [recipes, setRecipes] = useState([])

  async function getRecipe() {
    try {
      const recipesData = await recipeAPI.index();
      console.log(recipesData, 'recipesData in AllRecipePage')
      setRecipes(recipesData)
      
    } catch (error) {
      console.error(error, 'error for getRecipe in AllRecipePage')
    }
  }

  useEffect(function () {
    getRecipe();
  }, [])

  async function handleCheckToken(){
   const expDate = await checkToken()
   console.log(expDate)
  }

  async function handleDelete(recipe) {
    await recipeAPI.deleteRecipe(recipe)
  }

  const recipeMap = recipes.map((r, index) =>
  <AllRecipes  
    key = {index}
    id = {r._id}
    recipe = {r}
    ingredients = {r.ingredients}
    recipeName = {r.recipeName}
    recipeIngredients = {r.recipeIngredients}
    recipeInstructions = {r.recipeInstructions}
    handleDelete = {handleDelete}
  />
  );

  return (
    <>
      <h1>All Recipe Page</h1>
      
      <div>Recipe component that will Map over each recipe generated and will link to a detail page</div>
      <div>Detail Page will be nested within recipe component but will list over recipe.fields</div>
      <br/>

      {recipeMap}
    </>
  )
}
