import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import UserDashboard from './Pages/UserDashboard'
import AdminDashboard from './Pages/AdminDashboard'
import UserHome from './Components/UserHome'
import UserTransactions from './Components/UserTransactions'
import UserProfile from './Components/UserProfile'
import AdminHome from './Components/AdminHome'
import AdminProfile from './Components/AdminProfile'
import AdminTransaction from './Components/AdminTransaction'
 

function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/signup' element={ <SignUp/> }/>
        <Route path='/userdashboard' element={ <UserDashboard/> } >
          <Route path='/userdashboard/home' element={ <UserHome/> } />
          <Route path='/userdashboard/transactions' element={ <UserTransactions/> } />
          <Route path='/userdashboard/profile' element={ <UserProfile/> } />
        </Route>
        <Route path='/admindashboard' element={ <AdminDashboard/> } >
          <Route path='/admindashboard/home' element={<AdminHome/>} />
          <Route path='/admindashboard/profile' element={<AdminProfile/>} />
          <Route path='/admindashboard/transactions' element={<AdminTransaction/>} />
        </Route>
      </Routes>

    </Router>
    <ToastContainer/>
    </>
  )
}

export default App
