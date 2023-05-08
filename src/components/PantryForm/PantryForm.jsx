import React from 'react'
import { useState, useEffect } from 'react'
import * as pantryAPI from '../../utilities/pantry-api'
import PantryMap from '../PantryMap/PantryMap';

export default function PantryForm() {

  const [pantries, setPantries] = useState([])

  async function getPantries() {
    try{
      const pantry = await pantryAPI.showPantry();
      console.log(pantry, 'pantry in pantry form')
      setPantries(pantry);
    } catch(err) {
      console.log(err, 'error for getPantries')
    }
  }

  useEffect(function () {
    getPantries();
  }, [])

  async function handleDelete(pantry) {
    await pantryAPI.deletePantry(pantry);
}


  return (
    <div>
      <div>PANTRY Ingredients - WILL MAP OVER ALL PANTRIES</div>
      <div>{<PantryMap pantries={pantries} handleDelete={handleDelete} />}</div>
      

  
    </div>
  )
}
