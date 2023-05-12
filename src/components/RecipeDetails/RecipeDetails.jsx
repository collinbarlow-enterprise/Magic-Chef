import React from 'react'
import * as recipeAPI from '../../utilities/recipe-api'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function RecipeDetails() {
  const { id } = useParams();
  console.log(id, 'recipeID in RECIPE DETAILS')
  const [specificRecipe, setSpecificRecipe] = useState({})

  async function handleGrabRecipe() {
    console.log(id, 'id in handleGrab')
    const recipe = await recipeAPI.findRecipe(id);
    console.log(recipe, 'recipe in RecipeDetails');
    setSpecificRecipe(recipe);
  }

  useEffect(function () {
    handleGrabRecipe();
  }, [id])
  return (
    <div>
        <div>Recipe: {specificRecipe.recipeName}</div><br/>
        <div>Ingredients: {specificRecipe.recipeIngredients}</div><br/>
        <div>Directions: {specificRecipe.recipeInstructions}</div><br/>
    </div>
  )
}
