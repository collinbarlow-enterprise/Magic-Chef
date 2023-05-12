import React, { useState, useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import * as pantryAPI from '../../utilities/pantry-api'
import * as recipeAPI from '../../utilities/recipe-api'
// import IngredientComponent from '../IngredientComponent/IngredientComponent';

export default function PantryComponent({ingredients, id, pantry,  handleEditList, getPantries}) {
  const navigate = useNavigate();

  function handleEdit(){
    // console.log('inside handleEDIT PantryComponent')
    handleEditList(pantry._id)
  }

  async function handleDelete(pantry) {
    await pantryAPI.deletePantry(pantry);
    getPantries()
}

  async function handleRecipeCreate(pantry) {
    // navigate('/orders/');
    console.log(pantry,'pantry in RECIPE CREATE UI');
    // try {
    await recipeAPI.createRecipe(pantry)
    
    // getPantries()

      .then(() => {
        setTimeout(() => {
          navigate('/orders/');
          navigate(0);
        }, 3000)})

      //   return redirect ('/orders/');
      }
        // navigate('/orders');

  
  return (
    <div>
        <div>
          {ingredients}</div>
        <button onClick ={() => handleDelete(pantry)}>Delete  List</button>
        <button onClick ={() => handleEdit(pantry)}>Edit List</button>
        <button onClick ={() => handleRecipeCreate(pantry)}>Create Recipes</button>
    </div>
  )
}
