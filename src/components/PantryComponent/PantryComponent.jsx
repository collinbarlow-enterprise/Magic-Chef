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
    //navigate to loading page and then loading page grabs the id
    navigate(`/loadingPage/${id}`)



    // navigate('/orders/');
    // console.log(pantry,'pantry in RECIPE CREATE UI');

    // try {

// commenting this out for loading page test
    // const response = await recipeAPI.createRecipe(pantry);
    // console.log(response,'AFTER in RECIPE CREATE UI');


    // getPantries()
      // .then(() => {
      //   setTimeout(() => {

// commenting this out for loadingpage test
          // navigate('/myrecipes');



          // navigate(0);
        // }, 3000)})
  }
      //   return redirect ('/orders/');
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
