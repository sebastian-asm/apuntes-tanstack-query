import { useQuery } from '@tanstack/react-query'

import './App.css'

const getNumberRandom = async (): Promise<number> => {
  const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
  const number = await resp.json()
  return +number
}

function App() {
  const {
    data: number,
    isFetching,
    error,
    refetch
  } = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getNumberRandom
    // cuantas veces tiene que intentar cuando se produce un problema
    // retry: 5
  })

  return (
    <>
      {isFetching ? <h1>Cargando...</h1> : <h1>Número: {number}</h1>}
      <button onClick={() => refetch()} disabled={isFetching}>
        Nuevo número
      </button>
      {error && <p>{JSON.stringify(error)}</p>}
    </>
  )
}

export default App
