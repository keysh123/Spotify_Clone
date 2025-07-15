import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'

const Display = () => {
  return (
   <>
    <div className='text-white w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] overflow-auto lg:ml-0 lg:w-[75%]'>
        <Routes>
            <Route path='/' element={<DisplayHome/>} />
        </Routes>
    </div>
   </>
  )
}

export default Display