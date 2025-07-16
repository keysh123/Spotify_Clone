import React from 'react'
import { PlayerContext } from '../context/PlayerContext';

const SongItem = ({name , img , desc , id}) => {
  const {playWithId} = React.useContext(PlayerContext);

  return (
    <div onClick={()=>{
      playWithId(id);
    }} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-all duration-200'>
        <img className='rounded' src={img} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>

    </div>
  )
}

export default SongItem