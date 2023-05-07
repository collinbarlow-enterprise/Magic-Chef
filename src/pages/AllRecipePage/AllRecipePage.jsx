import React from 'react'
import { checkToken } from '../../utilities/users-service'
import AllRecipes from '../../components/AllRecipes/AllRecipes'

export default function OrderHistoryPage() {

  async function handleCheckToken(){
   const expDate = await checkToken()
   console.log(expDate)
  }

  return (
    <>
      <h1>All Recipe Page</h1>
      
      <div>Recipe component that will Map over each recipe generated and will link to a detail page</div>
      <div>Detail Page will be nested within recipe component but will list over recipe.fields</div>
      <br/>

      {<AllRecipes/>}
    </>
  )
}
