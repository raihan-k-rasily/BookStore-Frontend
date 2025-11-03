import React from 'react'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (

      <div className='min-h-screen  bg-slate-800'>
        <img src="./public/bookstack.png" alt="" className='w-full  rounded' />
        <h1 className='text-center text-2xl text-amber-50'>Admin</h1>
        <div className="text-center text-justify ms-10 ">
          <div className="my-3">
            <Link to={'/admin-home'}>
              <input type="radio" name='admin' id='' />
              <label className='text-amber-50 mx-2' htmlFor="">Home</label>
            </Link>
          </div>
          <div className="my-3">
            <Link to={'/admin-books'}>
              <input type="radio" name='admin' id='' />
              <label className='text-amber-50 mx-2' htmlFor="">All Books</label>
            </Link>
          </div>
          <div className="my-3">
           <Link to={'/admin-career'}>
              <input type="radio" name='admin' id='' />
              <label className='text-amber-50 mx-2' htmlFor="">Careers</label>
           </Link>
          </div>
          <div className="my-3">
           <Link to={'/admin-settings'}>
              <input type="radio" name='admin' id='' />
              <label className='text-amber-50 mx-2' htmlFor="">Settings</label>
           </Link>
          </div>

        </div>
      </div>
 
  )
}

export default AdminSidebar