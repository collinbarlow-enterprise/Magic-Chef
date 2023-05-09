import { useState, useEffect } from 'react'
import './App.css'
import NewPantryPage from '../NewPantryPage/NewPantryPage'
import OrderHistoryPage from '../AllRecipePage/AllRecipePage'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service';
import * as notesAPI from '../../utilities/notes-api'
import Notes from '../../components/Notes/Notes'
import HomePage from '../HomePage/HomePage'
import ForumPage from '../ForumPage/ForumPage'
import EditPantry from '../../components/EditPantry/EditPantry'

export default function App() {

  const [user, setUser] = useState(getUser())
  const [notes, setNotes] = useState ([])

  function updateUser(userState){
    setUser(userState)
  }

//   useEffect(function(){
//     async function getNotes(){
//       try {
//         const notes = await notesAPI.getAll();
//         // console.log(notes);
//         setNotes([notes]);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     getNotes();
//     //need to have the second argument to stop it from being an infinite loop
// }, [])
  function handleChange (evt) {

  }

  function handleSubmit (evt) {
    evt.preventDefault();
  }
  return (
    <main className="App">

      {user ?
        <>
          <NavBar user={user} updateUser={updateUser}/>
          <Routes>
            <Route path="/orders/" element={<OrderHistoryPage />} />
            <Route path="/orders/new" element={<NewPantryPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/orders/:id/editPantry" element={<EditPantry />} />
          </Routes>
        </>
        :
        <AuthPage user={user} setUser={updateUser} />
      }
      <p>Built by collin</p>
      {/* <Routes>
  {notes.length ? <Route path='/notes' element={<Notes notes={notes} />}/> : null }
</Routes>
{!notes.length && <p>No notes yet</p>} */}
      
      {/* <form onSubmit={handleSubmit}>
        <input type="text" value={notes} onChange={handleChange}></input>
        <button type="submit">Create new note</button>
      </form> */}
    </main>
  )
}

