import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPages } from '../auth/pages/LoginPages'
import { WaifusRoutes } from '../waifus/routes/WaifusRoutes'

export const AppRouter = () => {
  return (
    <> 
      <Routes>

        <Route path='/login' element={<LoginPages />} />
        <Route path='/*' element={<WaifusRoutes />} />
        
      </Routes>
    </>
  )
}
