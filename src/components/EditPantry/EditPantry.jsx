import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as pantryAPI from '../../utilities/pantry-api'

export default function EditPantry() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [newPantry, setNewPantry] = useState({ ingredients: ''});

    useEffect(() => {
        async function getPantry() {
            try{
                const pantryData = await pantryAPI.getPantry(id)
                console.log(pantryData, 'pantryData in getPantry EDITPANTRY COMP')
                setNewPantry(pantryData);
            } catch (error) {
                console.log(error, 'error in getPantry');
              }
        }
        getPantry();
    }, [id]);

    async function handleSubmit(event) {
        event.preventDefault();
        try{
          // console.log(event, 'evt in handleSubmit');
          // console.log(pantry, 'PANTRY in handleSubmit');
          console.log(newPantry, 'newPantry in EditPantry Comp')
          await pantryAPI.editPantry(id, newPantry);
          navigate('/pantry/new')
        }catch (err) {
          console.log(err, 'handlesubmit failed')
        }}
    
    function handleInputChange(event) {
        setNewPantry({...newPantry, [event.target.name]: event.target.value });
    }
    
      return (
        <div>
          <div>Edit your list</div>
          <div>Ingredients: {newPantry.ingredients}</div>
          <div className = 'pantry_form'>
            <form onSubmit={handleSubmit}>
              <label>Ingredient</label>
              <input 
              name='ingredients' 
              type='text' 
              value={newPantry.ingredients} 
              onChange={handleInputChange}
              />
              <button type='submit'>Add Ingredients</button>
            </form>
          </div>
        </div>
      )
    }
