import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate() ;
    const handle1=()=>{
        navigate("/contact")
    }
  return (
    <div>
      <h1>I am Home</h1>
      <p onClick={handle1}>Contact</p>
    </div>
  )
}
