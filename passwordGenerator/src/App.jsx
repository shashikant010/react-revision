import { useCallback } from "react";
import { useState } from "react"

export default function App() {
  const [length,setlength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [Password,setPassword]=useState("")

  const passwordGenerator=useCallback( ()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="123456789"
    if(charAllowed) str+="!@#$%^&*()_+"

    for (let i = 0; i < str.length; i++) {
      let char=Math.floor(Math.random()*str.length + 1)
      pass+=str.charAt(char)
      
    }
   setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])
  return (
    <>
    <h1 className="text-4xl text-center text-white">Password Generator</h1>

    
    </>
  )
}
