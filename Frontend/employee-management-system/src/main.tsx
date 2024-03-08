import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginScreen from './components/LoginScreen.tsx'
import './components/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginScreen />
  </React.StrictMode>,
)
