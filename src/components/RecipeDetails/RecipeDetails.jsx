import React from 'react'
import * as recipeAPI from '../../utilities/recipe-api'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function RecipeDetails() {
  const { id } = useParams();
  console.log(id, 'recipeID in RECIPE DETAILS')
  const [specificRecipe, setSpecificRecipe] = useState({})
  const [noteList, setNoteList] = useState({notes : ''});

  async function handleGrabRecipe() {
    console.log(id, 'id in handleGrab')
    const recipe = await recipeAPI.findRecipe(id);
    console.log(recipe, 'recipe in RecipeDetails');
    setSpecificRecipe(recipe);
  }

  function handleInputChange(evt) {
    setNoteList({...noteList, [evt.target.name] : evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      console.log(noteList, 'noteList before submit')
      await recipeAPI.addNote(id, noteList).then(() => {
      handleGrabRecipe();
      });
    } catch (err) {
      console.log(err, 'handleSubmit for notes form failed')
    }
  }

  async function handleDelete(index, note) {
    // console.log(note, 'id in handleDelete UI')
    await recipeAPI.removeNote(index, note, id);
    handleGrabRecipe();
  }

  useEffect(function () {
    handleGrabRecipe();
  }, [id])

  return (
    <div>
      <h2>What's going on with this recipe???</h2>
        <div>Recipe: {specificRecipe.recipeName}</div><br/>
        <div>Ingredients: {specificRecipe.recipeIngredients}</div><br/>
        <div>Directions: {specificRecipe.recipeInstructions}</div><br/>
        <div>Notes: </div>
        {specificRecipe.notes && specificRecipe.notes.map((note, index, id) => {
          return (
          <div key = {index}>
            <div >{index+1}. {note}</div>
            <button onClick ={() => handleDelete(index, note)}>Delete Note</button>
          </div>
          
          )
  })}
        {/* for (let note in specificRecipe.notes) {
          <div>note</div>
        } */}
        {/* <div>
        {specificRecipe.notes}
        </div> */}

        <div>
          <form onSubmit={handleSubmit}>
            <label>Write your notes here: </label>
            <input
            name = 'notes'
            type = 'text'
            value = {noteList.notes}
            onChange = {handleInputChange}
            />
            <button type = 'submit'>Add Notes</button>
          </form>
        </div>
    </div>
  )
}
