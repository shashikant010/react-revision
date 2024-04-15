import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'

function App() {

  return (
    // <UserContextProvider>
    //  <h1>hii i am sky
    //  </h1>
    //  <Login/>
    // </UserContextProvider>
    <Login/>
  )
}

export default App
