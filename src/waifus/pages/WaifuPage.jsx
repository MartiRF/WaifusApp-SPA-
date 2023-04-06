import React from 'react'
import { NavBar } from '../../components/NavBar'
import { AnimeList } from '../components/AnimeList'

export const WaifuPage = () => {
  return (
    <>
    <h1>WaifuPage</h1>
    <ul>
      <AnimeList category='waifu' />
    </ul>
    </>
  )
}
