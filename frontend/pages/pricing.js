
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
function pricing() {
  return (
    <div className={`bg-gray-100 min-h-screen`}>
      <div className={`container mx-auto px-4 py-16`}>
        <h1 className={`text-4xl font-bold mb-8 text-center`}>Pricing</h1>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`}>
          <div className={`bg-white p-8 shadow rounded-lg`}>
            <h2 className={`text-2xl font-bold mb-4`}>Basic</h2>
            <p className={`text-gray-500 mb-4`}>Perfect for individuals</p>
            <p className={`text-3xl font-bold mb-4`}>$9.99</p>
            <ul className={`text-gray-500`}>
              <li className={`mb-2`}>Feature 1</li>
              <li className={`mb-2`}>Feature 2</li>
              <li className={`mb-2`}>Feature 3</li>
            </ul>
            <button className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4`}>
              Buy Now
            </button>
          </div>
          <div className={`bg-white p-8 shadow rounded-lg`}>
            <h2 className={`text-2xl font-bold mb-4`}>Pro</h2>
            <p className={`text-gray-500 mb-4`}>Perfect for businesses</p>
            <p className={`text-3xl font-bold mb-4`}>$19.99</p>
            <ul className={`text-gray-500`}>
              <li className={`mb-2`}>Feature 1</li>
              <li className={`mb-2`}>Feature 2</li>
              <li className={`mb-2`}>Feature 3</li>
              <li className={`mb-2`}>Feature 4</li>
            </ul>
            <button className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4`}>
              Buy Now
            </button>
          </div>
          <div className={`bg-white p-8 shadow rounded-lg`}>
            <h2 className={`text-2xl font-bold mb-4`}>Premium</h2>
            <p className={`text-gray-500 mb-4`}>Perfect for advanced users</p>
            <p className={`text-3xl font-bold mb-4`}>$29.99</p>
            <ul className={`text-gray-500`}>
              <li className={`mb-2`}>Feature 1</li>
              <li className={`mb-2`}>Feature 2</li>
              <li className={`mb-2`}>Feature 3</li>
              <li className={`mb-2`}>Feature 4</li>
              <li className={`mb-2`}>Feature 5</li>
            </ul>
            <button className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4`}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default pricing