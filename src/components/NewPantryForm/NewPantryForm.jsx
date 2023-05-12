import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import * as pantryAPI from '../../utilities/pantry-api'

export default function PantryForm({ ingredientList, setIngredientList, getPantries }) {
  const navigate = useNavigate();
  // const [pantry, setPantry] = useState({ ingredients: ''});
  const [pantryTrigger, setPantryTrigger] = useState(false);


  // async function handleSubmit(evt) {
  async function handleSubmit(evt) {
    evt.preventDefault();
    try{
      // console.log(event, 'evt in handleSubmit');
      // console.log(pantry, 'PANTRY in handleSubmit');
      await pantryAPI.createPantry(ingredientList);
      setIngredientList({ ingredients: ''});
      getPantries();
      // navigate('/orders/');
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
      <div>What ingredients do you have? Separate each item with a coma </div>
      <div className = 'pantry_form'>
        <form onSubmit={handleSubmit}>
        {/* <form onSubmit={ () => setPantryTrigger(true)}> */}
          <label>Ingredients:</label>
          <input 
          name='ingredients' 
          type='text' 
          value={ingredientList.ingredients} 
          onChange={handleInputChange} />
        
          <button type='submit'>Add Ingredients</button>
        </form>

      </div>
    </div>
  )
}