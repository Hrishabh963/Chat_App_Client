import React from 'react'
import SignUpForm from './modules/SignUp/SignUpForm'
import { Routes, Route} from 'react-router-dom' 
import Login from './modules/Login/Login'
import HomePage from './modules/Home/HomePage'
const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<SignUpForm />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<HomePage />} />
    </Routes>
  )
}

export default App
