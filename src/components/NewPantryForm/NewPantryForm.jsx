import React from 'react'
import { useState } from 'react'
import * as pantryAPI from '../../utilities/pantry-api'

export default function PantryForm() {
  const [pantry, setPantry] = useState([]);



  async function handleSubmit(event) {
    event.preventDefault();
    try{
      console.log(event, 'evt in handleSubmit');
      console.log(pantry, 'PANTRY in handleSubmit');
      // console.log(event.target, 'evt.TARGET in handleSubmit');
      // console.log(event.target.value, 'evt.TARGET.value in handleSubmit');
      // console.log(ingredient, 'ingredient in handleSubmit');
      // const formData = new FormData(event.target);
      // console.log(formData, 'FORMDATA')
      // setPantry(formData.get('ingredient'));
      await pantryAPI.createPantry(JSON.stringify(pantry));
    }catch (err) {
      console.log(err, 'handlesubmit failed')
    }}

    function handleInputChange(event) {
      setPantry(event.target.value);
    }

  return (
    <div>
      <div>PANTRY FORM COMPONENTS - WILL MAP OVER ALL PANTRIES</div>
      <div className = 'pantry_form'>
        <form onSubmit={handleSubmit}>
          <label>Ingredient</label>
          <input name='ingredient' value={pantry} onChange={handleInputChange} />
        
          <button type='submit'>Add Ingredients</button>
        </form>

      </div>
    </div>
  )
}