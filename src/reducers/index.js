import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "fakaroony", duration: "30:12" },
    { title: "ya zalemni", duration: "40:19" },
    { title: "ya mesaharny", duration: "51:08" },
    { title: "enta omry", duration: "80:54" },
    { title: "lelet 7ob", duration: "48:58" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT-SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
