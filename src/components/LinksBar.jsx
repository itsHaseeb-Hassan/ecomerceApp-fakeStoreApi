import React from 'react'

const LinksBar = () => {
  return (
    <>
          <nav className=" py-4 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  items-center">
            <div className="flex space-x-4 mx-auto">
              <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-medium">Products</a>
              <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
    </nav>
    </>
  )
}

export default LinksBar