import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import * as pantryAPI from '../../utilities/pantry-api'
import PantryMap from '../PantryMap/PantryMap';

export default function PantryForm() {

  const navigate = useNavigate();
  const [pantries, setPantries] = useState([])

  async function getPantries() {
    try{
      const pantry = await pantryAPI.showPantry();
      // console.log(pantry, 'pantry in pantry form')
      setPantries(pantry);
    } catch(err) {
      console.log(err, 'error for getPantries')
    }
  }

  useEffect(function () {
    getPantries();
  }, [])

  async function handleDelete(pantry) {
    await pantryAPI.deletePantry(pantry);
}

async function handleEditList(id){
  navigate(`/orders/${id}/editPantry`)
}


  return (
    <div>
      <div>PANTRY Ingredients - WILL MAP OVER ALL PANTRIES</div>
      <div>{<PantryMap pantries={pantries} handleDelete={handleDelete} handleEditList={handleEditList} />}</div>
    </div>
  )
}
