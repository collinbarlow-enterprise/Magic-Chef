import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import * as pantryAPI from '../../utilities/pantry-api'

import NewPantryForm from '../../components/NewPantryForm/NewPantryForm'
import PantryForm from '../../components/PantryForm/PantryForm'
import Recipe from '../../components/Recipe/Recipe'

export default function NewPantryPage() {
  const navigate = useNavigate();
  const [ingredientList, setIngredientList] = useState({ ingredients: ''});

  const [pantries, setPantries] = useState([])

  async function getPantries() {
    try{
      const pantry = await pantryAPI.showPantry();
      // console.log(pantry, 'pantry in pantry form')
      setPantries(pantry);
    } catch(err) {
      console.log(err, 'error for getPantries')
    }
  }

//   async function handleDelete(pantry) {
//     await pantryAPI.deletePantry(pantry);
// }

async function handleEditList(id){
  navigate(`/orders/${id}/editPantry`)
}

  useEffect(function () {
    getPantries();
  }, [
    // ingredientList, 
    // pantries
  ])
  return (
    <div>

      <h1>What's in the fridge?</h1>
{/* form component - do I need to send any data down? Or can I just access it in form and send it back? */}
      {/* <div>What ingredients do you currently have? Separate each item with a coma</div> */}
      {<NewPantryForm ingredientList = {ingredientList} setIngredientList={setIngredientList} getPantries={getPantries}/>}
      <br/>
{/* will hold a list of documents, so should access data on NewPantry and then pass the prop down */}
      {/* <div>Pantry Component that will hold all form submissions with a button that upon click will send to ChatGPT and trigger the Recipe to generate</div> */}
      {<PantryForm pantries={pantries} 
      // handleDelete={handleDelete}  
      handleEditList={handleEditList} getPantries={getPantries}/>}
      <br/>
{/* will need a way to trigger this component or make it appear elsewhere? Could use a redirect after a button click/submission? */}
      {/* <div>Recipe Component that will take appear on a button click from the Pantry Component after the ingredients have been sent</div>
      {<Recipe/>} */}
    </div>
  )
}
