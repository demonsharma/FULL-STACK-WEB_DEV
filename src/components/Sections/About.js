import React from 'react'
import { Navigate } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>Page not found-01</h1>
      <Navigate to={"/"}></Navigate>
    </div>
  )
}
