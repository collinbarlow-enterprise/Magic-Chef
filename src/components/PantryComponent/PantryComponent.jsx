import React, { useState, useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import * as pantryAPI from '../../utilities/pantry-api'
import * as recipeAPI from '../../utilities/recipe-api'
// import IngredientComponent from '../IngredientComponent/IngredientComponent';

export default function PantryComponent({ingredients, id, pantry,
  //  handleDelete, 
   handleEditList, getPantries}) {
  const navigate = useNavigate();
  // const [recipeCreationTrigger, setRecipeCreationTrigger] = useState(false);
    // console.log(ingredients, 'ingredients in pantrycomponent')
    // console.log(pantry, 'PANTRY in pantrycomponent')

    // const [list, setList] = useState({})

    // function 

    // const p = pantry.map(i => ({
    //     ingredients: i.ingredients

    // }));

  //   async function handleDelete(pantry) {
  //     await pantryAPI.deletePantry(pantry);
  // }

  function handleEdit(){
    // console.log('inside handleEDIT PantryComponent')
    handleEditList(pantry._id)
  }

  async function handleDelete(pantry) {
    await pantryAPI.deletePantry(pantry);
    getPantries()
    // setRecipeCreationTrigger(true);
    // setRecipeCreationTrigger(false);
}

  async function handleRecipeCreate(pantry) {
    console.log(pantry,'pantry in RECIPE CREATE UI');
    try {
    await recipeAPI.createRecipe(pantry)
    ;
    // setRecipeCreationTrigger(true);
    // setRecipeCreationTrigger(false);
    // getPantries()
      // .then(() => {
        // setTimeout(() => {
        //   navigate('/orders/');
        // }, 500)

        return redirect ('/orders/');
      } catch (error) {
        console.log(error,'error for handleCREate')
      }
        // navigate('/orders');
      // })
      // .catch(error => {
      //   console.log(error, 'error while creating pantries');
      // });
    // navigate('/orders');
  }

  // useEffect(() => {
  //   if (recipeCreationTrigger) {
  //     // handleRecipeCreate(pantry);
  //     // setRecipeCreationTrigger(false);
  //     getPantries()
  //     .then(() => setRecipeCreationTrigger(false))
  //     .catch(error => {
  //       console.log(error, 'Error with useEffect')
  //     })
  //   }
  // }, [recipeCreationTrigger])
  
  return (
    <div>
        <div>PantryComponent Do the ingredients show up: {ingredients}</div>
        <button onClick ={() => handleDelete(pantry)}>Delete Ingredient list</button>
        <button onClick ={() => handleEdit(pantry)}>Edit list</button>
        {/* <button onClick ={() => setRecipeCreationTrigger(true)}>Create Recipes</button> */}
        <button onClick ={() => handleRecipeCreate(pantry)}>Create Recipes</button>
    </div>
  )
}
