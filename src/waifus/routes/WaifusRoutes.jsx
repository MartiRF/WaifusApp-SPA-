import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../../components/NavBar'
import { HusbandoPage, NekoPage, WaifuPage, KitsunePage, AnimePage, SearchPage } from '../pages'


export const WaifusRoutes = () => {
  return (
  <>
    <NavBar />
    <Routes>
        <Route path='/waifu' element={<WaifuPage />}/>
        <Route path='/kitsune' element={<KitsunePage />}/>
        <Route path='/neko' element={<NekoPage />}/>
        <Route path='/husbando' element={<HusbandoPage />}/>

        <Route path='/search' element={<SearchPage />} />
        <Route path='/anime' element={<AnimePage />} />

        <Route path='/' element={<Navigate to='/waifu' />} />

      </Routes>
  </>
  )
}
