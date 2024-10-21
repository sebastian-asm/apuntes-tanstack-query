import useRandom from './hooks/useRandom'
import './App.css'

function App() {
  const { randomQuery } = useRandom()
  return (
    <>
      {randomQuery.isFetching ? <h1>Cargando...</h1> : <h1>Número: {randomQuery.data}</h1>}
      <button onClick={() => randomQuery.refetch()} disabled={randomQuery.isFetching}>
        Nuevo número
      </button>
      {randomQuery.error && <p>{JSON.stringify(randomQuery.error)}</p>}
    </>
  )
}

export default App
