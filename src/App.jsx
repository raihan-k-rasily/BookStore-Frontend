import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './users/pages/Home'
import Auth from './pages/Auth'
import { useEffect, useState } from 'react'

import Pnf from './pages/Pnf'
import AllBook from './users/pages/AllBook'
import ViewBook from './users/pages/ViewBook'
import Careers from './users/pages/Careers'
import Contact from './users/pages/Contact'
import Profile from './users/pages/Profile'
import Preloader from './components/Preloader'
import AdminCareers from './admin/pages/AdminCareers'
import AdminSettings from './admin/pages/AdminSettings'
import AdminHome from './admin/pages/AdminHome'
import AdminBooks from './admin/pages/AdminBooks'

import PaymentError from './users/pages/Paymenterror'
import PaymentSuccess from './users/pages/Paymentsuccess'


function App() {
  const [isloading,setIsloading]=useState(false)
  
  useEffect(()=>{
    setTimeout(()=>{
      setIsloading(true)
    },2000)
  },[])
  return (
    <>

    <Routes>

      <Route path='' element={isloading?<Home/>:<Preloader/>}/>
      <Route path='login' element={<Auth/>}/>
      <Route path='register' element={<Auth register/>}/>
      <Route path='allbooks' element={<AllBook/>}/>
      <Route path='veiwbook/:id' element={<ViewBook/>}/>
      <Route path='careers' element={<Careers/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='/payment-success' element={<PaymentSuccess />} />
      <Route path='/payment-error' element={<PaymentError/>}/>

      {/* ADMIN ROUTING */}

      <Route path='/admin-home' element={<AdminHome />} />
      <Route path='/admin-books' element={<AdminBooks />} />
      <Route path='/admin-career' element={<AdminCareers />} />
      <Route path='/admin-settings' element={<AdminSettings />} />

      


      <Route path='*' element={<Pnf/>}/>



    </Routes>

    </>
  )
}

export default App