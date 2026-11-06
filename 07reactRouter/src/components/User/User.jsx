import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { id } = useParams()
  return (
    <div className="text-lg bg-gray-800 font-bold text-white text-3xl text-center p-4">User ID: {id}</div>
  )
}

export default User