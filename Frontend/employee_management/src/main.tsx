import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import './global.css'
import Landing from './Landing/Landing'
import LoginEmployee from './Login/LoginEmployee'
import RegisterEmployee from './Register/RegisterEmployee'
import LoginManager from './Login/LoginManager'
import RegisterManager from './Register/RegisterManager'
import DashboardManager from './DashboardManager/DashboardManager'
import DashboardEmployee from './DashboardEmployee/DashboardEmployee'
import AddShifts from './AddShifts/AddShifts'
import ViewShifts from './ViewShiftsEmployee/ViewShifts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} /> 
        <Route path='/login-employee' element={<LoginEmployee />} /> 
        <Route path='/register-employee' element={<RegisterEmployee />} />
        <Route path='/login-manager' element={<LoginManager />} /> 
        <Route path='/register-manager' element={<RegisterManager />} />
        <Route path='/dashboard-manager' element={<DashboardManager />} />
        <Route path='/dashboard-employee' element={<DashboardEmployee />} />
        <Route path='/add-shift' element={<AddShifts />} />
        <Route path='/view-shifts' element={<ViewShifts />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
