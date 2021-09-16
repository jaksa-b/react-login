import { useCallback, useReducer } from 'react'

export type InputChangeEvent = {
  name: string
  value: string
}

function useForm<T extends Record<string, string>>(initialValue: T): [T, ({ name, value }: InputChangeEvent) => void] {
  const formReducer = (prevState: T, { name, value }: InputChangeEvent) => ({
    ...prevState,
    [name]: value,
  })

  const [state, dispatch] = useReducer(formReducer, initialValue)

  const handleDispatch = useCallback(
    ({ name, value }: InputChangeEvent) => {
      dispatch({
        name,
        value,
      })
    },
    [dispatch]
  )

  return [state, handleDispatch]
}

export default useForm
