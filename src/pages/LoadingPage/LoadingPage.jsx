import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as pantryAPI from '../../utilities/pantry-api';
import * as recipeAPI from '../../utilities/recipe-api';

export default function LoadingPage() {
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    async function findPantry() {
      const currentPantry = await pantryAPI.getPantry(id);
        if (Object.keys(currentPantry).length !==0) {
        await recipeAPI.createRecipe(currentPantry);
      navigate('/myrecipes')
      }
    } 
    findPantry();
  }, [])

  return (
    <div >
      <div className="container background-div text-center">
        <h5>Loading Page</h5>
        <div>The Magic Chef is Cooking Something Up - Sometimes Several Recipes</div>
        <div className="center">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div>This could take a few seconds...</div>
      </div>
    </div>
  )
}
