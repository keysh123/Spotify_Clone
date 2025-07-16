import React, { useEffect } from 'react';
import { assets, songsData } from '../assets/assets';

const PlayerContext = React.createContext();

const PlayerContextProvider = ({ children }) => {
  const audioRef = React.useRef(null);
  const seekBg = React.useRef(null);
  const seekBar = React.useRef(null);
  const [track , setTrack] = React.useState(songsData[0]);
  const [playStatus, setPlayStatus] = React.useState(false);
  const [time, setTime] = React.useState({
    currentTime :{
      seconds: 0,
      minutes: 0,
    },
    totalTime: {
      seconds: 0,
      minutes: 0,
    } 
  });
   const play = () => {
     audioRef.current.play();
     setPlayStatus(true);
   }
   const pause = () => {
     audioRef.current.pause();
      setPlayStatus(false);
    } 
    useEffect(()=>{
      setTimeout(()=>{
        audioRef.current.ontimeupdate = () => {
          setTime({
            currentTime: {
              seconds: Math.floor(audioRef.current.currentTime % 60),
              minutes: Math.floor(audioRef.current.currentTime / 60),
            },
            totalTime: {
              seconds: Math.floor(audioRef.current.duration % 60),
              minutes: Math.floor(audioRef.current.duration / 60),
            },
          });
          seekBar.current.style.width = `${
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          }%`;
        }

      },1000)

    },[audioRef])
   

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause

  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerContext }; // 👈 Export the context
export default PlayerContextProvider;
