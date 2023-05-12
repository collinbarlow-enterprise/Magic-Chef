import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AllRecipes({recipe, ingredients, recipeName, recipeIngredients, recipeInstructions, handleDelete, id}) {
  const navigate = useNavigate();

  async function handleDetailsPage(id) {
    navigate(`/recipes/${id}`)
  }
  return (
    <div>
        <div></div>
        <div>The {recipeName} recipe is made using:</div>
         <div>{recipeIngredients}</div>
         <button onClick ={() => handleDelete(recipe)}>Delete Recipe</button>
         <button onClick ={() => handleDetailsPage(id)}>Details Page</button>

    
    </div>
  )
}
