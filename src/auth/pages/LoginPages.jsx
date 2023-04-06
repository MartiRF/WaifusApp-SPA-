import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPages = () => {
  const navigate = useNavigate()

  const hadlerLogin = () => {
    navigate('/', {
      replace:true,
    })
  }
  return (
  <div className='h-screen w-screen bg-slate-50 flex flex-col justify-center items-center'>
    <div className='bg-slate-50 flex flex-col justify-center items-center border-4 border-purple-300 rounded-lg p-7 gap-3'>
      <h1 className='font-bold text-5xl'>LOGIN</h1>
      <input className='input' 
        type="email" placeholder='Email'/>
      <input className='input' type="password" placeholder='Contraseña'/>
      <button onClick={hadlerLogin} className='border-4 border-black p-2 rounded-xl w-full font-bold'>Login</button>
    </div>
  </div>
  )
}
