import React , {useContext} from 'react'
import UserContext from '../Context/UserContext'
import { useState } from 'react';
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const {setUser}=useContext(UserContext)

function handleSubmit(e){
  e.preventDefault()
  setUser({username,password })
}
  return (
    <div>
     <h2>Login</h2>
     <input type="text" placeholder='Username' 
     value={username}
     onChange={(e)=>{setUsername(e.target.value)}}/>
     <input type="text" placeholder='Password' value={password}
     onChange={(e)=>{setPassword(e.target.value)}} />
     <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
