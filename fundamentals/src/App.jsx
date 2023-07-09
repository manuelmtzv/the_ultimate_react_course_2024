import { useEffect, useState } from 'react'
import AdviceCount from './components/AdviceCount'

function App() {
  const [advice, setAdvice] = useState('')
  const [adviceCount, setAdviceCount] = useState(0)

  useEffect(() => {
    getAdvice()
  }, [])

  async function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice)
        setAdviceCount((prev) => prev + 1)
      })
  }

  return (
    <>
      <h1>Hello, world</h1>

      <p>{advice}</p>

      <button onClick={getAdvice}>Get advice</button>

      <AdviceCount adviceCount={adviceCount} />
    </>
  )
}

export default App
