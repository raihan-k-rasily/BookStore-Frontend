import React, { use, useState } from "react";
import { Button } from "flowbite-react";
import { HiUser } from "react-icons/hi";
import { GoogleLoginUserAPI, loginUserAPI, registerUserAPI } from "../services/allAPIs";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


function Auth({ register }) {
  const [userData, setUserData] = useState({ 'username': "", 'email': '', 'password': "" });
  const navigate = useNavigate()

  const handleRegister = async () => {
    console.log(userData);
    if (!userData.username || !userData.email || !userData.password) {

      toast.warn("Fill all the Details!!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      try {
        const response = await registerUserAPI(userData)
        console.log(response);
        if (response.status === 201) {
          // alert("Registration Successful!!!")
          toast.success("Registration Successful!!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          setUserData({ 'username': '', 'email': '', 'password': '' })

          setTimeout(() => {
            navigate('/login')
          }, 5000)
        } else {
          alert("Registration Failed!!!")

          toast.error("Registration Failed!!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log((response.response.data.message));

        }
      } catch (err) {
        console.log(err);

      }
    }
  }

  const handleLogin = async () => {
    console.log(userData);
    try {
      const response = await loginUserAPI(userData)
      console.log(response);
      if (response.status === 200) {
        sessionStorage.setItem('userDetails', JSON.stringify(response.data.user))
      sessionStorage.setItem('token',JSON.stringify(response.data.token))
        // alert("Login Successful!!!")
        toast.success("Login Successful!!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        setUserData({ 'username': '', 'email': '', 'password': '' })
        if (response.data.user.role == "Bookstore Admin") {
          setTimeout(() => {
            navigate('/admin-home')
          }, 5000)
        } else {

          setTimeout(() => {
            navigate('/')
          }, 5000)
        }
      } else {
        // alert("Login Failed!!!")
        toast.error("Login Failed!!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log((response.response.data.message));

      }
    } catch (err) {
      console.log(err);

    }


  }

  const handleGoogleLogin = async (credentialResponse) => {
    console.log("google login", credentialResponse);
    const decode = jwtDecode(credentialResponse.credential)
    console.log(decode);
    const response = await GoogleLoginUserAPI({ email: decode.email, password: "googlepswd", username: decode.name, profile: decode.picture })
    console.log(response);
    if (response.status === 200) {
      sessionStorage.setItem('userDetails', JSON.stringify(response.data.user))
      sessionStorage.setItem('token',JSON.stringify(response.data.token))
      // alert("Login Successful!!!")
      toast.success("Login Successful!!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setTimeout(() => {
        navigate('/')
      }, 5000)
    }

  }


  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('https://c0.wallpaperflare.com/preview/484/270/562/read-book-books-book-store.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center">
              <HiUser className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
            Book Store
          </h1>
          {
            register ? <p className="text-gray-900 mt-2 text-l">Create your account</p> : <p className="text-gray-900 mt-2 text-l">Login to Your account</p>
          }
        </div>

        {/* Form */}
        <form className="space-y-5">
          {
            register && <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                onChange={e => setUserData({ ...userData, username: e.target.value })}
                placeholder="Enter your username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
              />
            </div>
          }

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              onChange={e => setUserData({ ...userData, email: e.target.value })}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              onChange={e => setUserData({ ...userData, password: e.target.value })}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>

          {
            register ? <Button onClick={handleRegister}
              type="button"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Register
            </Button> :
              <>
                <Button onClick={handleLogin}
                  type="button"
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-md transition duration-200"
                >
                  Login
                </Button>
                <GoogleLogin onClick={() => handleGoogleLogin(null)}
                  onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    handleGoogleLogin(credentialResponse)
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </>
          }

        </form>

        {/* Footer */}
        {
          register ? <div className="text-center mt-5">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-green-700 hover:text-green-800 font-medium"
              >
                Login
              </a>
            </p>
          </div> : <div className="text-center mt-5">
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-green-700 hover:text-green-800 font-medium"
              >
                Register
              </a>
            </p>
          </div>
        }
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
}

export default Auth;
