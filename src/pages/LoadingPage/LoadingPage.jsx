import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import * as pantryAPI from '../../utilities/pantry-api'
import * as recipeAPI from '../../utilities/recipe-api'

export default function LoadingPage() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [pantry, setPantry] = useState({})

  async function findPantry() {
    console.log(id, 'id in loadingPage')
    const currentPantry = await pantryAPI.getPantry(id)
    console.log(currentPantry, 'curentPantry in getPantry')
    setPantry(currentPantry);
    }  

  async function createRecipe() {
    console.log(pantry, 'pantry in loadingPage Create function')
    await recipeAPI.createRecipe(pantry);
    navigate('/myrecipes');
  }

  useEffect(function () {
    findPantry();
  }, [])

  useEffect(() => {
    createRecipe();
  }, [pantry])

  return (
    <div>
        <div>Loading Page</div>
        <div>The Magic is Happening</div>
    </div>
  )
}
