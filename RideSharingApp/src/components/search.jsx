import React from 'react'
import Inputbtn from './Inputbtn'
function Search() {
  return (
    <>
    <div className= ' flex items-center gap-9 flex-col justify-center w-3/4 md:h-96 h-80 md:w-96 shadow-xl'>
        <h1 className='text-4xl font-bold font-sans'>Let's Go</h1>
        <Inputbtn placeholder="Pickup" />
        <Inputbtn placeholder="Destination"/>
        <button className='bg-black rounded-lg  text-white font-sans font-bold size- w-28 h-12 '>Search Rides</button>
    </div>
    </>
    
  )
}

export default Search;