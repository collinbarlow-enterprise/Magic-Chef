import React from 'react'
import PantryMap from '../PantryMap/PantryMap';

export default function PantryForm({pantries, handleEditList, getPantries }) {

  return (
    <div className="container">
      <h6 className="text-center">Ingredient Lists you've submitted:</h6>
      <div>{<PantryMap pantries={pantries} handleEditList={handleEditList} getPantries={getPantries}/>}</div>
    </div>
  )
}
