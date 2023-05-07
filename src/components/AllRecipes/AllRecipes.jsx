import React from 'react'
import RecipeDetails from '../RecipeDetails/RecipeDetails'

export default function AllRecipes() {
  return (
    <div>
        <div>ALL RECIPE COMPONENT</div>
        <div>Import and MAP over all recipe data from user</div>
        <div>SUB COMPONENT THAT WILL LINK TO RECIPE DETAILS</div>
        {<RecipeDetails/>}
    
    </div>
  )
}
