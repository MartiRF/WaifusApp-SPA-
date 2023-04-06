import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { WaifuPage } from '../waifus/pages/WaifuPage'
import { KitsunePage } from '../waifus/pages/KitsunePage'
import { LoginPages } from '../auth/pages/LoginPages'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/waifu' element={<WaifuPage />}/>
        <Route path='/kitsune' element={<KitsunePage />}/>

        <Route path='/login' element={<LoginPages />} />
      </Routes>
    </>
  )
}
