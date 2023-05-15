import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AllRecipes({recipe,  recipeName, handleDelete, id}) {
  const navigate = useNavigate();

  async function handleDetailsPage(id) {
    navigate(`/recipes/${id}`)
  }
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <h6 className="text-center">{recipeName} Recipe</h6>
        <div className="row g-0">
        <div className="col-2 spacer-new-form-left"></div>
          <button className="pantry-button col-4" onClick ={() => handleDelete(recipe)}>Delete Recipe</button>
         <button className="pantry-button col-4" onClick ={() => handleDetailsPage(id)}>Details Page</button>
         <div className="col-2 spacer-new-form-right"></div>
         </div>
        </div>
      </div>
    
  )
}
