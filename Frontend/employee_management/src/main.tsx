import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './global.css'
import MainMenu from './MainMenu/MainMenu'
import Register from './RegisterPage/RegisterPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<MainMenu />} /> 
        <Route path='/register-user' element={<Register />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
