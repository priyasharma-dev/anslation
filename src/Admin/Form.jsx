import React, { useState } from 'react'
import BlogForm from './BlogForm'
import CarrerForm from './CarrerForm'

function Form() {
  const [form, setForm] = useState("Blog")
         
  function handleClick(key) {
    setForm(key)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className='text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          Admin Dashboard
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Manage your content with our intuitive admin forms. Choose between creating blog posts or career opportunities.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-2 flex gap-2 border border-gray-200">
          <button
            onClick={() => handleClick("Blog")}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 ${
              form === "Blog" 
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105' 
                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            <span className="text-xl">📝</span>
            Blog Form
          </button>
          
          <button
            onClick={() => handleClick("Carrer")}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 ${
              form === "Carrer" 
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transform scale-105' 
                : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
            }`}
          >
            <span className="text-xl">💼</span>
            Career Form
          </button>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 overflow-hidden">
          {/* Active Form Indicator */}
          <div className={`h-2 ${
            form === "Blog" 
              ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
              : 'bg-gradient-to-r from-green-500 to-green-600'
          }`}></div>
          
          <div className="p-1">
            {form === "Blog" ? <BlogForm/> : <CarrerForm/>}
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Form