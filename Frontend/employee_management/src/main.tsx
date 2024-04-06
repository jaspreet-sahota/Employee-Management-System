import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import './global.css'
import Landing from './Landing/Landing'
import Login from './Login/Login'
import Register from './Register/Register'
import AdminScreen from './AdminScreen/AdminScreen'
import EmployeeScreen from './EmployeeScreen/EmployeeScreen'
import ChooseRole from './ChooseRole/ChooseRole'
import AddShifts from './AddShifts/AddShifts'
import DelShifts from './DelShifts/DelShifts'
import EditShifts from './EditShifts/EditShifts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/register' element={<Register />} />
        <Route path='/admin-dashboard' element={<AdminScreen />} />
        <Route path='/employee-dashboard' element={<EmployeeScreen />} />
        <Route path='/choose-role' element={<ChooseRole />} />
        <Route path='/add-shift' element={<AddShifts />} />
        <Route path='/del-shift' element={<DelShifts />} />
        <Route path='/edit-shift' element={<EditShifts />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
