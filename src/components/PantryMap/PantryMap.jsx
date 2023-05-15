import React from 'react'
import PantryComponent from '../PantryComponent/PantryComponent';

export default function PantryMap({pantries, handleEditList, getPantries}) {

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

  return (
    <div>
    <div>{pantry} </div>
    </div>
  )
}
