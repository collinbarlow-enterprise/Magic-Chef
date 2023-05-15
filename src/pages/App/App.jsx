import { useState } from 'react'
import './App.css'
import NewPantryPage from '../NewPantryPage/NewPantryPage'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import { getUser } from '../../utilities/users-service';
import HomePage from '../HomePage/HomePage'
import ForumPage from '../ForumPage/ForumPage'
import EditPantry from '../../components/EditPantry/EditPantry'
import RecipeDetails from '../../components/RecipeDetails/RecipeDetails'
import AllRecipePage from '../AllRecipePage/AllRecipePage'
import LoadingPage from '../LoadingPage/LoadingPage'

export default function App() {

  const [user, setUser] = useState(getUser())

  function updateUser(userState){
    setUser(userState)
  }

  return (
    <main className="App">

      {user ?
        <>
          <NavBar user={user} updateUser={updateUser}/>
          <Routes>
            <Route path="/myrecipes" element={<AllRecipePage />} />
            <Route path="/pantry/new" element={<NewPantryPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/pantry/:id/editPantry" element={<EditPantry />} />
            <Route path='/recipes/:id' element={<RecipeDetails/>} />
            <Route path='/loadingPage/:id' element={<LoadingPage/>} />
          </Routes>
        </>
        :
        <AuthPage user={user} setUser={updateUser} />
      }
      <p className="fixed-bottom">Built by collin</p>

    </main>
  )
}

