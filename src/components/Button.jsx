import React from 'react'

const Button = ({ text }) => {
  return (
    <button 
    className="text-white bg-black px-5 py-2 rounded-lg border-2 border-black"
    >
      {text}
    </button>
  )
}

export default Button
