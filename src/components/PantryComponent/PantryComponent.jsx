import React from 'react'
import * as pantryAPI from '../../utilities/pantry-api'
// import IngredientComponent from '../IngredientComponent/IngredientComponent';

export default function PantryComponent({ingredients, id, pantry, handleDelete}) {
    console.log(ingredients, 'ingredients in pantrycomponent')
    console.log(pantry, 'PANTRY in pantrycomponent')

    // const [list, setList] = useState({})

    // function 

    // const p = pantry.map(i => ({
    //     ingredients: i.ingredients

    // }));

  //   async function handleDelete(pantry) {
  //     await pantryAPI.deletePantry(pantry);
  // }
  return (
    <div>
        <div>PantryComponent Do the ingredients show up: {ingredients}</div>
        <button onClick ={() => handleDelete(pantry)}>Delete Ingredient list</button>
    </div>
  )
}
