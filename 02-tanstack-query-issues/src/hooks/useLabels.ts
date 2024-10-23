import { useQuery } from '@tanstack/react-query'

import { getLabels } from '../issues/actions'

export default function useLabels() {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60 // 1 hora que se la info se considera "fresh"
    // muestra este mock cuando esta cargando
    // placeholderData: [
    //   {
    //     id: 588833528,
    //     node_id: 'MDU6TGFiZWw1ODg4MzM1Mjg=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Difficulty:%20medium',
    //     name: 'Difficulty: medium',
    //     color: 'fbca04',
    //     default: false
    //   },
    //   {
    //     id: 588833528,
    //     node_id: 'MDU6TGFiZWw1ODg4MzM1Mjg=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Difficulty:%20medium',
    //     name: 'Difficulty: medium',
    //     color: 'fbca04',
    //     default: false
    //   }
    // ]
  })
  return { labelsQuery }
}
