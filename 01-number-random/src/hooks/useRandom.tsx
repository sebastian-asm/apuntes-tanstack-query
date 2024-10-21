import { useQuery } from '@tanstack/react-query'

const getNumberRandom = async (): Promise<number> => {
  const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
  const number = await resp.json()
  return +number
}

export default function useRandom() {
  const randomQuery = useQuery({ queryKey: ['randomNumber'], queryFn: getNumberRandom })
  return { randomQuery }
}
