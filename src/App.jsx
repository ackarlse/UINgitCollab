import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <Routes>
      <Route index element={<h1>Hjem</h1>} />
      <Route path='characters' element={<h1>Karakterer</h1>} />
      <Route path='characters/:id' element={<h1>Karakter</h1>} />
    </Routes>

  )
}

export default App
