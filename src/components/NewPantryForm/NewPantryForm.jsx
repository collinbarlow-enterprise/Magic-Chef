import React from 'react'
import { useState } from 'react'
import * as pantryAPI from '../../utilities/pantry-api'

export default function PantryForm() {
  const [pantry, setPantry] = useState({ ingredients: ''});



  async function handleSubmit(event) {
    event.preventDefault();
    try{
      // console.log(event, 'evt in handleSubmit');
      // console.log(pantry, 'PANTRY in handleSubmit');
      await pantryAPI.createPantry(pantry);
    }catch (err) {
      console.log(err, 'handlesubmit failed')
    }}

    function handleInputChange(event) {
      setPantry({...pantry, [event.target.name]: event.target.value });
    }

  return (
    <div>
      <div>PANTRY FORM COMPONENTS </div>
      <div className = 'pantry_form'>
        <form onSubmit={handleSubmit}>
          <label>Ingredient</label>
          <input 
          name='ingredients' 
          type='text' 
          value={pantry.ingredients} 
          onChange={handleInputChange} />
        
          <button type='submit'>Add Ingredients</button>
        </form>

      </div>
    </div>
  )
}