import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import { useAuth } from './hooks'
import { LoginScreen } from './screens/LoginScreen'
import { PostDetailsScreen } from './screens/PostDetailsScreen'
import { PostListScreen } from './screens/PostListScreen'

export const App: React.FC = () => {
  const { state } = useAuth()

  return (
    <>
      {!state?.isAuthenticated ? (
        <LoginScreen />
      ) : (
        <HashRouter>
          <Switch>
            <Route path="/" exact render={() => <PostListScreen />} />
            <Route path="/post/:postId" exact render={() => <PostDetailsScreen />} />
          </Switch>
        </HashRouter>
      )}
    </>
  )
}
