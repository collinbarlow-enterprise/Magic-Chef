import React from 'react'
import { useNavigate } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails'

export default function AllRecipes({recipe, ingredients, recipeName, recipeIngredients, recipeInstructions, handleDelete, id}) {
  const navigate = useNavigate();

  async function handleDetailsPage(id) {
    navigate(`/recipes/${id}`)
  }
  return (
    <div>
        <div>ALL RECIPE COMPONENT</div>
        <div>The {recipeName} recipe is made using:</div>
         <div>{recipeIngredients}</div>
         <div>The {recipeInstructions}</div>
         <button onClick ={() => handleDelete(recipe)}>Delete Recipe</button>
         <button onClick ={() => handleDetailsPage(id)}>Details Page</button>
        <div>SUB COMPONENT THAT WILL LINK TO RECIPE DETAILS</div>
        {<RecipeDetails/>}
    
    </div>
  )
}
