import { current } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-5'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.profilePicture} alt={current.name} className='w-32 h-32 rounded-full self-center cursor-pointer mx-auto object-cover' />
        <input defaultValue={currentUser.username} type='text' placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg' />
        <input defaultValue={currentUser.email} type='email' placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg' />
        <input type='password' placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' />
        <button className='bg-gray-600 text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-80'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-600'>Delete Account</span>
        <span className='text-blue-600'>Sign Out</span>
      </div>
    </div>
  )
}
