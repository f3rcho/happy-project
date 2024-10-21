import { useEffect, useState } from 'react'
import { searchUsers } from '../services/users'
import { Parent } from '../types'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useParents () {
  const [parents, setParents] = useState<Parent[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    searchUsers().then(d => setParents(d)).catch(e => console.error(e))
    setLoading(false)
  }, [])

  return {
    parents,
    loading,
    error
  }
}
