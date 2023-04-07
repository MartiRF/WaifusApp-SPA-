import React from 'react'

export const AnimeCard = ({data}) => {
  const {artist_href, artist_name, source_url, url} = data
  return (

    <div className='bg-slate-600 w-full min-h-[380px] max-h-screen md:min-h-[350px] md:max-h-[400px]'>
        <img src={url} alt={artist_href} className='w-full h-full max-h-[80vh] object-cover md:max-h-[350px]' />
        <p className='pb-3 text-center text-2xl text-white font-bold pt-1'>{artist_name}</p>
    </div>

  )
}
