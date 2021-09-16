import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './src/App'
import { AuthProvider } from './src/hooks/useAuth'

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
)
