import React from 'react'
import NewPantryForm from '../../components/NewPantryForm/NewPantryForm'
import PantryForm from '../../components/PantryForm/PantryForm'
import Recipe from '../../components/Recipe/Recipe'

export default function NewPantryPage() {
  return (
    <div>

      <h1>New Pantry Page</h1>
{/* form component - do I need to send any data down? Or can I just access it in form and send it back? */}
      <div>Pantry Component that will hold a form</div>
      {<NewPantryForm />}
      <br/>
{/* will hold a list of documents, so should access data on NewPantry and then pass the prop down */}
      <div>Pantry Component that will hold all form submissions with a button that upon click will send to ChatGPT and trigger the Recipe to generate</div>
      {<PantryForm/>}
      <br/>
{/* will need a way to trigger this component or make it appear elsewhere? Could use a redirect after a button click/submission? */}
      <div>Recipe Component that will take appear on a button click from the Pantry Component after the ingredients have been sent</div>
      {<Recipe/>}
    </div>
  )
}
