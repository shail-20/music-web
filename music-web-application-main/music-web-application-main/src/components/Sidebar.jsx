import React from "react";
import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Playlists from "./Playlists";
export default function Sidebar() {
  return (
    <Container>
      <div className="top__links">
        <div className="logo">
          <img
        
         src = "http://www.yozem.co.il/wp-content/uploads/2016/03/apple_podcast_white-1-427x441.png"alt="Tripod"
         // src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
          // src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
           // src="https://www.freepnglogos.com/uploads/music-logo-black-and-white-png-21.png"
          // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepnglogos.com%2Fpics%2Fmusic-logo-png&psig=AOvVaw2oTkgEVQsCkUJ6J4cv6rEG&ust=1675666079032000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjbn97k_fwCFQAAAAAdAAAAABAE"
          // alt="Tripod"
         //https://www.nicepng.com/png/detail/38-388308_top-music-red-logo-png-logo-top-music.png
          //src = "http://www.yozem.co.il/wp-content/uploads/2016/03/apple_podcast_white-1-427x441.png"alt="Tripod"
          />
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul> 
      </div>
      <Playlists/>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
      img {
        max-inline-size: 80%;
        block-size: auto;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
`;
