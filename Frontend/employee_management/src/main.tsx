import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import './global.css'
import Landing from './Landing/Landing'
import LoginEmployee from './LoginEmployee/Login'
import RegisterEmployee from './RegisterEmployee/Register'
import LoginManager from './LoginManager/Login'
import RegisterManager from './RegisterManager/Register'
import DashboardManager from './DashboardManager/DashboardManager'
import DashboardEmployee from './DashboardEmployee/DashboardEmployee'
import AddShifts from './AddShifts/AddShifts'
import ViewShifts from './ViewShiftsEmployee/ViewShifts'
import ViewStoreSchedule from './ViewStoreSchedule/ViewStoreSchedule'

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
        <Route path='/view-store-schedule' element={<ViewStoreSchedule />} />
        <Route path='/add-shift' element={<AddShifts />} />
        <Route path='/view-shifts' element={<ViewShifts />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
