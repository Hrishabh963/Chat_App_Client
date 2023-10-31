import React from 'react'
import SignUpForm from './modules/SignUp/SignUpForm'
import { Routes, Route } from 'react-router-dom' 
const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<SignUpForm />} />
    </Routes>
  )
}

export default App
