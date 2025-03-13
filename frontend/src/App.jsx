import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import UserDashboard from './Pages/UserDashboard'
import AdminDashboard from './Pages/AdminDashboard'
import UserHome from './Components/UserHome'
import UserTransactions from './Components/UserTransactions'
import UserProfile from './Components/UserProfile'
 

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
        <Route path='/admindashboard' element={ <AdminDashboard/> } />
      </Routes>

    </Router>
    </>
  )
}

export default App
