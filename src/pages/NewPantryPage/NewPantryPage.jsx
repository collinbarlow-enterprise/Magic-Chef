import React from 'react'
import NewPantryForm from '../../components/NewPantryForm/NewPantryForm'
import PantryForm from '../../components/PantryForm/PantryForm'
import Recipe from '../../components/Recipe/Recipe'

export default function NewPantryPage() {
  return (
    <div>

      <h1>New Pantry Page</h1>

      <div>Pantry Component that will hold a form</div>
      {<NewPantryForm />}
      <br/>

      <div>Pantry Component that will hold all form submissions with a button that upon click will send to ChatGPT and trigger the Recipe to generate</div>
      {<PantryForm/>}
      <br/>

      <div>Recipe Component that will take appear on a button click from the Pantry Component after the ingredients have been sent</div>
      {<Recipe/>}
    </div>
  )
}
