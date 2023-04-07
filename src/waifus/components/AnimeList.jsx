import React from 'react'
import { getAnimeByCategory } from '../helpers/getAnimeByCategory'
import { AnimeCard } from './AnimeCard'

export const AnimeList = ({category}) => {
  const data = getAnimeByCategory(category)
  console.log(data)
  return (
    <div className='bg-red-800 -z-10 w-full h-full flex flex-col gap-3 md:grid md:grid-cols-5  md:px-3 md:gap-4 md:py-2'>
      {data.map((img,index) => (
        <AnimeCard data={img} key={index} />
      ))}
    </div>
  )
}
