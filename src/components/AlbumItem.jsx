import React from 'react'
import {useNavigate} from 'react-router-dom'

const AlbumItem = ({name , img , desc , id}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/album/${id}`);
  }
  return (
    <div onClick={handleClick} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-all duration-200'>
        <img className='rounded' src={img} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>

    </div>
  )
}

export default AlbumItem