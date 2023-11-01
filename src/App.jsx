import React from 'react'
import SignUpForm from './modules/SignUp/SignUpForm'
import { Routes, Route} from 'react-router-dom' 
import Login from './modules/Login/Login'
import HomePage from './modules/Home/HomePage'
import Sidebar from './modules/Sidebar/Sidebar'
import Chatroom from './modules/Chatroom/Chatroom'
const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<SignUpForm />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Sidebar />}>
        <Route index element={<HomePage />} />
        <Route path='/chatroom/:id' element={<Chatroom />} />
      </Route>
    </Routes>
  )
}

export default App
