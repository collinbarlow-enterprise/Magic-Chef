import React from 'react'
import RecipeDetails from '../RecipeDetails/RecipeDetails'

export default function AllRecipes({recipe, ingredients, recipeName, recipeIngredients, recipeInstructions, handleDelete}) {
  return (
    <div>
        <div>ALL RECIPE COMPONENT</div>
        <div>The {recipeName} recipe is made using:</div>
         <div>{recipeIngredients}</div>
         <div>The {recipeInstructions}</div>
         <button onClick ={() => handleDelete(recipe)}>Delete Recipe</button>
        <div>SUB COMPONENT THAT WILL LINK TO RECIPE DETAILS</div>
        {<RecipeDetails/>}
    
    </div>
  )
}
