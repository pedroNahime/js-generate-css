import React from 'react'
import { Provider } from 'react-redux'
import './config/reactotron'
import store from './store'
import { hot } from 'react-hot-loader'
import Init from './components/init'

function App() {
  return (
    <Provider store={store}>
      <Init />
    </Provider>
  )
}

export default hot(module)(App)
