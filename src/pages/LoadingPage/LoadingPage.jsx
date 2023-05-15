import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as pantryAPI from '../../utilities/pantry-api';
import * as recipeAPI from '../../utilities/recipe-api';

export default function LoadingPage() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [pantry, setPantry] = useState({})

  useEffect(() => {
    async function findPantry() {
      const currentPantry = await pantryAPI.getPantry(id);
      console.log(currentPantry, 'currentPantry in findPantry')
      // setPantry(currentPantry);
  
      if (Object.keys(currentPantry).length !==0) {
        await recipeAPI.createRecipe(currentPantry);
      // navigate('/myrecipes')
      }
    } 
    
    findPantry();

  }, [])

  // async function findPantry() {
  //   const currentPantry = await pantryAPI.getPantry(id);
  //   // setPantry(currentPantry);

  //   if (Object.keys(currentPantry).length !==0) {
  //     createRecipe(currentPantry);}
  //   }  

  // async function createRecipe(currentPantry) {
  //   await recipeAPI.createRecipe(currentPantry);
  //   // navigate('/myrecipes');
  // }



  // useEffect(function () {
  //   findPantry();
  // }, [])

  // useEffect(() => {
  //   if (Object.keys(pantry).length !==0) {
  //     createRecipe();
  //   }
  // }, [pantry])

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
