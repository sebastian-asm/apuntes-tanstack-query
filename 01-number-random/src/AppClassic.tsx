import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  const [refresh, setRefresh] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
      .then((resp) => resp.json())
      .then((num) => setNumber(num))
      .finally(() => setLoading(false))
  }, [refresh])

  return (
    <>
      {loading ? <h1>Cargando...</h1> : <h1>Número: {number}</h1>}
      <button onClick={() => setRefresh(refresh + 1)} disabled={loading}>
        Nuevo número
      </button>
    </>
  )
}

export default App
