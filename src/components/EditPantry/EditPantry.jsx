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
        <div className="container background-div">
          <div className="row">
            <h1 className="text-center">Edit your list</h1>
            <div className="row">
              <div className="col-2 spacer-new-form-left"></div>
              <div className="text-center">Ingredients: {newPantry.ingredients}</div>
            </div>
            <div className="col-2 spacer-new-form-left"></div>
              <div className="new-ingredient-form col-6">
                <form id="edit-pantry-form" onSubmit={handleSubmit}>
                  <label className="ingredient-label">Ingredients:</label>
                  <input 
                    name='ingredients' 
                    type='text' 
                    value={newPantry.ingredients} 
                    onChange={handleInputChange}
                  />
                </form>
                </div>
                <div className="row">
                <div className="col-5"></div>
                <button type="submit" form="edit-pantry-form"className="add-ingredients-button col-2">Add Ingredients</button>
                <div className="col-5"></div>
              </div>
              </div>
        </div>
      )
    }
