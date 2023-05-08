import React from 'react'
import PantryComponent from '../PantryComponent/PantryComponent';
import * as pantryAPI from '../../utilities/pantry-api'
// import Pantry from '../../../models/pantry';

export default function PantryMap({pantries, handleDelete, handleEditList}) {
// console.log(pantries, 'pantries in PantryMap')

    const pantry = pantries.map((p, index) => (
        <PantryComponent
        key= {index}
        id = {p._id}
        pantry = {p}
        ingredients = {p.ingredients}
        handleDelete = {handleDelete}
        handleEditList = {handleEditList}
        />
      ));

// console.log(pantry, 'pantry AFTER PANTRIES MAP')

// async function handleDelete(pantries) {
//     await pantryAPI.deletePantry(pantries);
// }

  return (
    <div>
    <div>PantryMap</div>
    <div>{pantry} </div>
    </div>
  )
}
