import React from 'react'
import PantryComponent from '../PantryComponent/PantryComponent';

export default function PantryMap({pantries, handleDelete, handleEditList, getPantries}) {
// console.log(pantries, 'pantries in PantryMap')

    const pantry = pantries.map((p, index) => (
        <PantryComponent
        key= {index}
        id = {p._id}
        pantry = {p}
        ingredients = {p.ingredients}
        handleEditList = {handleEditList}
        getPantries={getPantries}
        />
      ));

// console.log(pantry, 'pantry AFTER PANTRIES MAP')

  return (
    <div>
    <div>{pantry} </div>
    </div>
  )
}
