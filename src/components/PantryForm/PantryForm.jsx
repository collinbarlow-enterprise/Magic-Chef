import React from 'react'
import { useState } from 'react'
import * as pantryAPI from pantryAPI

export default function PantryForm() {
  const [ingredient, setIngredient] = useState('');



  const handleSubmit = (evt) =>
    evt.preventDefault();

  return (
    <div>
      <div>PANTRY FORM COMPONENTS - WILL MAP OVER ALL PANTRIES</div>
      <div className = 'pantry_form'>
        <form onSubmit={handleSubmit}>
          <label>Ingredient</label>
          <input name='ingredient' value={ingredient} onChange={(evt) => setIngredient(event.target.value)} />
        
          <button type='submit'>Add Ingredients</button>
        </form>

      </div>
    </div>
  )
}
