import {HomeIcon,SearchIcon,LibraryIcon,PlusCircleIcon, RssIcon, HeartIcon} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from 'react';
import { signOut } from "next-auth/react";
import useSpotify from "hooks/useSpotify";
import {playlistIdState} from "../atoms/playlistAtom";
import { useRecoilState } from "recoil";


function Sidebar() {
    const spotifyApi = useSpotify();
    const {data:session,status}= useSession();
    const [playlists, setPlaylists] = useState([]);
    const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
    console.log("You picked",playlistId);
    
    useEffect(() => {
        if(spotifyApi.getAccessToken()){
            spotifyApi.getUserPlaylists().then((data) => {
                setPlaylists(data.body.items);
            })
        }
    },[session,spotifyApi]);
    console.log(playlists);
    return (
    <div className="text-gray-500 p-5 text-[0.5rem] lg:text-[0.7rem] sm:max-w-[12rem] lg:max-w-[15rem] border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide hidden md:inline-flex">
        <div className="space-y-4">
            <button className = "flex items-center space-x-2 hover:text-white ">
                <HomeIcon className="h-5 w-5 "/>
                <p>Home</p>
            </button>
            <button className = "flex items-center space-x-2 hover:text-white">
                <SearchIcon className="h-5 w-5 "/>
                <p>Search</p>
            </button>
            <button className = "flex items-center space-x-2 hover:text-white">
                <LibraryIcon className="h-5 w-5 "/>
                <p>Your Library</p>
            </button>
            <hr className="border-t-[0.1px] border-gray-900"/>


            <button className = "flex items-center space-x-2 hover:text-white ">
                <PlusCircleIcon className="h-5 w-5 "/>
                <p>Create Playlist</p>
            </button>
            <button className = "flex items-center space-x-2 hover:text-white">
                <HeartIcon className="h-5 w-5 "/>
                <p>Liked Songs</p>
            </button>
            <button className = "flex items-center space-x-2 hover:text-white">
                <RssIcon className="h-5 w-5 "/>
                <p>Your Library</p>
            </button>
            <hr className="border-t-[0.1px] border-gray-900"/>
        
    
            {playlists.map((playlists) =>(
                <p key={playlists.id} onClick={() => setPlaylistId(playlists.id)} className="cursor-pointer hover:text-white">{playlists.name}</p>
            ))}
            
        </div> 
    </div>
  )
}

export default Sidebar