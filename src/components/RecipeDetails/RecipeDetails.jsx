import React from 'react'
import * as recipeAPI from '../../utilities/recipe-api'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function RecipeDetails() {
  const { id } = useParams();
  console.log(id, 'recipeID in RECIPE DETAILS')
  // const [recipes, setRecipes] = useState([])
  const [specificRecipe, setSpecificRecipe] = useState({})

  // async function getRecipe() {
  //   try {
  //     const recipesData = await recipeAPI.index();
  //     console.log(recipesData, 'recipesData in AllRecipePage')
  //     setRecipes(recipesData)
  //     console.log(recipes,)
  //     // const recipeParam = recipes.find((recipe) => recipe.id === id);
  //     // console.log(recipeParam, 'recipeParam in RecipeDetails ')
      
  //   } catch (error) {
  //     console.error(error, 'error for getRecipe in AllRecipePage')
  //   }
  // }



  async function handleGrabRecipe() {
    console.log(id, 'id in handleGrab')
    const recipe = await recipeAPI.findRecipe(id);
    console.log(recipe, 'recipe in RecipeDetails');
    setSpecificRecipe(recipe);
  }

  // useEffect(function () {
  //   getRecipe();
  // }, [])

  useEffect(function () {
    handleGrabRecipe();
  }, [id])
  return (
    <div>
        <div>Recipe Details: </div><br/>
        <div>Recipe: {specificRecipe.recipeName}</div><br/>
        <div>Ingredients: {specificRecipe.recipeIngredients}</div><br/>
        <div>Directions: {specificRecipe.recipeInstructions}</div><br/>
    </div>
  )
}
