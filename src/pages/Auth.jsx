import React from "react";
import { Button } from "flowbite-react";
import { HiUser } from "react-icons/hi";

function Auth({register}) {

    

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
            register?<p className="text-gray-900 mt-2 text-l">Create your account</p>:<p className="text-gray-900 mt-2 text-l">Login to Your account</p>
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
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>

          {
            register ? <Button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Register
          </Button> : <Button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Login
          </Button>
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
    </div>
  );
}

export default Auth;
