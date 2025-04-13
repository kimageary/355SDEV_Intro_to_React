import { useState } from 'react'
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Profile</h1>
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}

export default App
