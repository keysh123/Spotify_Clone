import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayRef = React.useRef(null);
  const location = useLocation()
  const isAlbumPage = location.pathname.includes('/album/');
  const albumId = isAlbumPage ? location.pathname.split('/album/')[1] : null;
  const bgColor = isAlbumPage ? albumsData[Number(albumId)].bgColor : 'bg-[#1a1a1a]';
  console.log('Display component rendered', { isAlbumPage, albumId, bgColor });
  useEffect(() => {
  if (displayRef.current) {
    if (isAlbumPage) {
      console.log('Setting background gradient for album page:', bgColor);
      displayRef.current.style.backgroundImage = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.backgroundImage = 'none';
      displayRef.current.style.backgroundColor = '#121212';
    }
  }
}, [isAlbumPage, bgColor]);


  return (
   <>
    <div ref={displayRef} className='text-white w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] overflow-auto lg:ml-0 lg:w-[75%]'>
        <Routes>
            <Route path='/' element={<DisplayHome/>} />
            <Route path='/album/:id' element={<DisplayAlbum/>} />
        </Routes>
    </div>
   </>
  )
}

export default Display