import React from 'react'
import { useState, useEffect } from 'react'
import * as pantryAPI from '../../utilities/pantry-api'

export default function PantryForm() {

  const [pantries, setPantries] = useState([])

  async function getPantries() {
    try{
      const pantry = await pantryAPI.showPantry();
      console.log(pantry, 'pantry in pantry map')
      setPantries(pantry);
    } catch(err) {
      console.log(err, 'error for getPantries')
    }
  }

  useEffect(function () {
    getPantries();
  }, [])


  return (
    <div>
      <div>PANTRY Ingredients - WILL MAP OVER ALL PANTRIES</div>
      

  
    </div>
  )
}
