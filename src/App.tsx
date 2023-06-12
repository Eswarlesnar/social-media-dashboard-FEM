import { useState } from 'react'
import './App.css'
import Followers from './components/Followers/Followers'
import Overview from './components/Overview/Overview'
import Header from './components/header/Header'

function App() {
  const [darkMode , setDarkMode] = useState(false)
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className='app-container' data-theme = {darkMode}>
      <Header  handleDarkModeToggle = {handleDarkModeToggle} darkMode = {darkMode}/>
      <Followers />
      <Overview />
    </div>
  )
}

export default App
