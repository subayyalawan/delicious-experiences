import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams()
  return (
    <div className='container mx-auto'>
        <div className='bg-contact-yellow  text-3xl text-center font-Freight-bold md:p-8 p-4 my-16 w-10/12 mx-auto'>User: {id}</div>
    </div>
  )
}

export default User