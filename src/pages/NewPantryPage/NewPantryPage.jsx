import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import * as pantryAPI from '../../utilities/pantry-api'

import NewPantryForm from '../../components/NewPantryForm/NewPantryForm'
import PantryForm from '../../components/PantryForm/PantryForm'

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

async function handleEditList(id){
  navigate(`/pantry/${id}/editPantry`)
}

  useEffect(function () {
    getPantries();
  }, [])

  return (
    <div>
      <h1>What's in the fridge?</h1>
      {<NewPantryForm ingredientList = {ingredientList} setIngredientList={setIngredientList} getPantries={getPantries}/>}
      <br/>
      {<PantryForm pantries={pantries} handleEditList={handleEditList} getPantries={getPantries}/>}
      <br/>
    </div>
  )
}
