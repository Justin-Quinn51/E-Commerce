import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Lightbox from './components/Lightbox'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Main />
      <Lightbox />
    </div>
  )
}

export default App
