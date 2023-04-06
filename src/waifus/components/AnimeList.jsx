import React from 'react'
import { getAnimeByCategory } from '../helpers/getAnimeByCategory'

export const AnimeList = ({category}) => {
  const data = getAnimeByCategory(category)
  console.log(data)
  return (
    <ul>
      {data.map((img,index) => (
        <li key={index}>
          {img.artist_name}
        </li>
      ))}
    </ul>
  )
}
