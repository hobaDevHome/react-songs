// action creator

export const selectSong = (song) => {
  return {
    type: "SELECT-SONG",
    payload: song,
  };
};
