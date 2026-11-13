import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hero from './section/Hero'
import ProductCardList from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <ProductCardList />
    </>
  )
}

export default App
