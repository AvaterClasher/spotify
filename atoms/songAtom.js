import { atom } from "recoil";

export const currentTrackIdState = atom({
    key : "currentTrackIdState",//unique id
    default:null,
});
export const isPlayingState = atom({
    key:"isPlayingState",
    default:false,
});