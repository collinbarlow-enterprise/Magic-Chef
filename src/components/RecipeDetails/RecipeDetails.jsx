import React from 'react'
import * as recipeAPI from '../../utilities/recipe-api'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function RecipeDetails() {
  const { id } = useParams();
  const [specificRecipe, setSpecificRecipe] = useState({})
  const [noteList, setNoteList] = useState({notes : ''});

  async function handleGrabRecipe() {
    const recipe = await recipeAPI.findRecipe(id);
    setSpecificRecipe(recipe);
  }

  function handleInputChange(evt) {
    setNoteList({...noteList, [evt.target.name] : evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await recipeAPI.addNote(id, noteList).then(() => {
      handleGrabRecipe();
      setNoteList({ notes: "" });
      });
    } catch (err) {
      console.log(err, 'handleSubmit for notes form failed')
    }
  }

  async function handleDelete(index, note) {
    await recipeAPI.removeNote(index, note, id);
    handleGrabRecipe();
  }

  useEffect(function () {
    handleGrabRecipe();
  }, [id])

  return (
    <div className="container background-div">
      <h2 className="text-center">The Chef Recommends:</h2>
      <h5>{specificRecipe.recipeName} Recipe</h5><br/>
      <div><strong>Ingredients</strong>: {specificRecipe.recipeIngredients}</div>
      <br/>
      <div><strong>Directions</strong>: {specificRecipe.recipeInstructions}</div>
      <br/>
      <div><strong>Notes</strong>: </div>
        {specificRecipe.notes && specificRecipe.notes.map((note, index) => {
          return (
          <div key={index}>
            <div>{index+1}. {note}</div>
            <button onClick ={() => handleDelete(index, note)}>Delete Note</button>
          </div>          
        )})}
        <div className="container">
          <form id="notes-form"onSubmit={handleSubmit}>
            <div className="row">
              <label className="ingredient-label row">Write your notes here: </label>
            </div>
            <div className="row">
              <input 
                name = 'notes'
                type = 'text'
                value = {noteList.notes}
                onChange = {handleInputChange}
              />
            </div>
          </form>
          <div className="row">
            <div className="col-5"></div>
            <button className="add-ingredients-button col-2"form="notes-form" type = 'submit'>Add Notes</button>
            <div className="col-5"></div>
          </div>
        </div>
    </div>    
  )
}
