import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { TabItem, Tabs, Card } from "flowbite-react";
import BookStoreFooter from '../../components/BookStoreFooter';
import { AdminHomeBookAPI, GetUserAPI } from '../../services/allAPIs';

function AdminBooks() {

  const [adminBooks, setAdminBooks] = useState([])
  const [getUsers, setGetUsers] = useState([])
  const [token, setToken] = useState('')

//   const getAllBookAdmin = async (token) => {
//     const updatedToken = token.replace(/"/g, "")
//     try {
//       const reqHeader = {
//         Authorization: `Bearer ${updatedToken}`
        
//       }
//         console.log("inside Book Try");
//         console.log(token);
        
//       const response = await AdminHomeBookAPI(reqHeader)
//       console.log(response.data);
      
//       setAdminBooks(response.data)
//     } catch (error) {
//       console.log("Error", error)
//     }
//   }
  const getAllBookAdmin = async (token) => {
    const updatedToken = token.replace(/"/g, "")
    try {
      const reqHeader = {
        Authorization: `Bearer ${updatedToken}`
        
      }

        console.log("inside admin Try");
        console.log(token);
        
      const response = await AdminHomeBookAPI(reqHeader)
      setAdminBooks(response.data)

    } catch (error) {
      console.log("Error", error)
    }
  }

  const getAllUserAdmin = async (token) => {
    const updatedToken = token.replace(/"/g, "")
    try {
      const reqHeader = {
        Authorization: `Bearer ${updatedToken}`
        
      }

        console.log("inside admin Try");
        console.log(token);
        
      const response = await GetUserAPI(reqHeader)
      setGetUsers(response.data)

    } catch (error) {
      console.log("Error", error)
    }
  }

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token")
    if (storedToken) {
      setToken(storedToken)
      getAllUserAdmin(storedToken)
      getAllBookAdmin(storedToken)
      
    }

  }, [])

  return (
    <div>
      <AdminHeader />

      <section>
        <div className="flex">

          <div className="w-64">
            <AdminSidebar />
          </div>

          <section className='text-center p-5'>
            <h3 className='text-3xl font-bold mb-4'>New Arrivals</h3>

            <Tabs className='flex justify-center' variant="pills">
              
              {/* BOOK LIST */}
              <TabItem title="Book List">
                <div className='flex flex-wrap justify-center gap-6 mt-10 px-5'>
                  {
                    adminBooks?.length > 0 ?
                      adminBooks?.map(item => (
                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
                          <img className="p-8 rounded-t-lg" src={item?.imageUrl} alt="book" />
                          <div className="px-5 pb-5">
                            <h5 className="text-xl font-semibold">{item?.title}</h5>
                          </div>
                        </div>
                      ))
                      :
                      <p className="text-black text-center mt-10">No books found</p>
                  }
                </div>
              </TabItem>

              {/* USERS */}
              <TabItem title="Users">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 ml-32">

                  {
                    getUsers?.length > 0 ?
                      getUsers.map(item => (
                        <Card className="max-w-sm bg-gray-300 mb-3">
                          <p className="text-2xl font-bold">{item._id}</p>
                          <div className='flex justify-between'>
                            <h2>{item.role}</h2>
                            <div className='mr-15'>
                              <h4>{item.username}</h4>
                              <p>{item.email}</p>
                            </div>
                          </div>
                        </Card>
                      ))
                      :
                      <p className="text-black text-center mt-10">No Users found</p>
                  }

                </div>
              </TabItem>

            </Tabs>
          </section>

        </div>
      </section>

      <BookStoreFooter />
    </div>
  )
}

export default AdminBooks