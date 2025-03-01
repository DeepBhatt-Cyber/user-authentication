import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
        <form className='flex flex-col gap-4'>
          <input type='text' placeholder='username' id='username' className='bg-slate-100 p-3 rounded-lg'/>
          <input type='email' placeholder='email' id='email' className='bg-slate-100 p-3 rounded-lg'/>
          <input type='password' placeholder='password' id='password' className='bg-slate-100 p-3 rounded-lg'/>
          <button className='bg-gray-600 text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-20'>Sign Up</button>
        </form>
        <div className='mt-3'>
          <p>Already have an account? <Link to="/sign-in" className='text-blue-600'>Sign In</Link></p>
        </div>
    </div>
  )
}
