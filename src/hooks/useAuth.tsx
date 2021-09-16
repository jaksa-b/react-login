import React, { createContext, useCallback, useContext, useReducer } from 'react'

const initialState: State = {
  isAuthenticated: false,
  user: '',
  token: '',
}
interface State {
  isAuthenticated?: boolean
  user: string
  token: string
}

interface Context {
  state: State
  dispatch: React.Dispatch<{ type: string; payload: State }>
}

interface Action {
  type: string
  payload: State
}

function useProvideAuth() {
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token,
        }
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: '',
          token: '',
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleDispatch = useCallback(
    ({ type, payload }: Action) => {
      dispatch({
        type,
        payload,
      })
    },
    [dispatch]
  )

  return { state, dispatch: handleDispatch }
}

const AuthContext = createContext<Context>({
  state: initialState,
  dispatch: () => null,
})

export const AuthProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

const useAuth = (): Context => {
  return useContext(AuthContext)
}

export default useAuth
