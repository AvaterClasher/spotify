import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { playlistState } from 'atoms/playlistAtom'

import useSpotify from 'hooks/useSpotify';
import { currentTrackIdState, isPlayingState } from 'atoms/songAtom';
import Song from './Song';

function Songs() {
    const playlist = useRecoilValue(playlistState);
    const spotifyApi = useSpotify();
    const [currentTrackId,setCurrentTrackId] = useRecoilState(currentTrackIdState);
    const [isPlaying,setIsPlaying] = useRecoilState(isPlayingState);

  return (
    <div className='px-8 flex flex-col space-y-1 pb-28 text-white'>
        {playlist?.tracks.items.map((track,index) =>(
           Song(track,index)
        ))};
    </div>
  );
}

export default Songs