import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/chatbot/inputBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <InputBox></InputBox>
    </>
  )
}

export default App
