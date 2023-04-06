import {data} from "../data/data.js"

export const getAnimeByCategory = (category) =>{
  const validCategory = ['husbando', 'kitsune', 'neko', 'waifu']
  if(validCategory.includes(category)){
    return [...data[category]]
  }else{
    throw new Error(`${category} no existente`)
  }
}
// console.log(getAnimeByCategory('waifu'))