import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const savedCount = localStorage.getItem('clickCount')
    if (savedCount) {
      setCount(parseInt(savedCount, 10))
    }
  }, [])

  const handleClick = () => {
    setCount(count + 1);
    localStorage.setItem('clickCount', count + 1)
  }

  return (
    <div className="main">
      <h1>Click Count: {count}</h1>
      <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default App
