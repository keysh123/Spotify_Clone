import React from "react";
import Navbar from "./Navbar";
import { albumsData , songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((album, idx) => {
            return (
              <AlbumItem
                key={idx}
                img={album.image}
                desc={album.desc}
                id={album.id}
                name={album.name}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, idx) => {
            return (
              <SongItem
                key={idx}
                img={song.image}
                desc={song.desc}
                id={song.id}
                name={song.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
