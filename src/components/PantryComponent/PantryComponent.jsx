import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import * as pantryAPI from '../../utilities/pantry-api'



export default function PantryComponent({ingredients, id, pantry,  handleEditList, getPantries}) {
  const navigate = useNavigate();
  function handleEdit(){
    handleEditList(pantry._id)
  }

  async function handleDelete(pantry) {
    await pantryAPI.deletePantry(pantry);
    getPantries()
}
  async function handleNavigation() {
    navigate(`/loadingPage/${id}`)
  }

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-sm-8"> <strong>Ingredients:</strong> {ingredients}</div>
        <div className="col-sm-4">
          <button className="pantry-button" onClick ={() => handleDelete(pantry)}>Delete  List</button>
          <button className="pantry-button" onClick ={() => handleEdit(pantry)}>Edit List</button>
          <button className="pantry-button" onClick ={() => handleNavigation(pantry)}>Create Recipes</button>
        </div>
      </div>
    </div>
  )
}
