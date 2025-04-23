import { useState } from 'react'
import './App.css'
import Feed from './Components/Feed/Feed'
//import Post from './Components/Post/Post'

function App() {
  return (
    <div className="app-container">
      <main className='app-content'>
        <Feed />
      </main>
      
    </div>
  )
}

export default App
