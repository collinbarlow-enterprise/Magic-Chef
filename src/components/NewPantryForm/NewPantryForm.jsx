import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import * as pantryAPI from '../../utilities/pantry-api'

export default function PantryForm({ ingredientList, setIngredientList, getPantries }) {
  const [pantryTrigger, setPantryTrigger] = useState(false);

  async function handleSubmit(evt) {
    evt.preventDefault();
    try{
      await pantryAPI.createPantry(ingredientList);
      setIngredientList({ ingredients: ''});
      getPantries();
    }catch (err) {
      console.log(err, 'handlesubmit failed')
    }}

  function handleInputChange(evt) {
    setIngredientList({...ingredientList, [evt.target.name]: evt.target.value });
    }
    
  useEffect(()=> {
    if (pantryTrigger){
      handleSubmit({ preventDefault: () => {} });
      setPantryTrigger(false);
      getPantries();
      }
    }, [pantryTrigger])

  return (
    <div>
      <div className="text-center">What ingredients do you have? Separate each item with a coma. </div>
      <div className = "container new-ingredient-form">
        <div className="row">
          <div className="col-2 spacer-new-form-left"></div>
          <div className="col-8">
            <form id="pantry-form"onSubmit={handleSubmit}>
              <label className="ingredient-label">Ingredients:</label>
              <input 
              name="ingredients" 
              type="text" 
              value={ingredientList.ingredients} 
              onChange={handleInputChange} />
            </form>
          </div>
          <div className="col-2 spacer-new-form-right"></div>
          <div className="row">
            <div className="col-5"></div>
            <button type="submit" className="add-ingredients-button col-2" form="pantry-form">Add Ingredients</button>
            <div className="col-5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}