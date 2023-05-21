import React from 'react'

function register() {
  return (
    <div className={`flex items-center justify-center min-h-screen bg-black`}>
      <div className={`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full`}>
        <h2 className={`text-2xl font-bold mb-4 text-center text-white`}>Register</h2>
        <form>
          <div className={`mb-4`}>
            <label className={`block text-gray-700 text-sm font-bold mb-2 text-white`} htmlFor="name">
              Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className={`mb-4`}>
            <label className={`block text-gray-700 text-sm font-bold mb-2 text-white`} htmlFor="email">
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={`mb-6`}>
            <label className={`block text-gray-700 text-sm font-bold mb-2 text-white`} htmlFor="password">
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className={`flex items-center justify-between`}>
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
              type="submit"
            >
              Register
            </button>
            <a
              className={`inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800`}
              href="#"
            >
              Already have an account? Login
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default register