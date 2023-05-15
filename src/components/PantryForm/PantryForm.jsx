import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import * as pantryAPI from '../../utilities/pantry-api'
import PantryMap from '../PantryMap/PantryMap';

export default function PantryForm({pantries, handleDelete, handleEditList, getPantries }) {

  return (
    <div className="container">
      <h6 className="text-center">Ingredient Lists you've submitted:</h6>
      <div>{<PantryMap pantries={pantries} handleEditList={handleEditList} getPantries={getPantries}/>}</div>
    </div>
  )
}
