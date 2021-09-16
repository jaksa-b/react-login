import React, { useEffect, useState } from 'react'

export type AsyncResult<T> = { loading: boolean; data: T | undefined; error: Error }

export default function useAsync<T>(fn: () => Promise<T>, deps?: React.DependencyList): AsyncResult<T> {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(Error)

  const getData = async () => {
    try {
      const res = await fn()
      setData(res)
      setLoading(false)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getData()
  }, deps)

  return { data, loading, error }
}
