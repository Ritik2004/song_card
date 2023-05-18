import { useEffect, useState } from "react";
import Player from "./components/Player";

function App() {
const [songs] = useState([
  {
    title:"Apna Bana Le",
    artist:"Arijit Singh",
    img_src:"./images/128Apna Bana Le - Bhediya 128 Kbps.jpg",
    src:"./audio/128-Apna Bana Le - Bhediya 128 Kbps.mp3"
  },
  {
    title:"Deva Deva",
    artist:"Arijit Singh",
    img_src:"./images/128Deva Deva - Brahmastra 128 Kbps.jpg",
    src:"./audio/128-Deva Deva - Brahmastra 128 Kbps.mp3"
  },
  {
    title:"Kesariya",
    artist:"Arijit Singh",
    img_src:"./images/128Kesariya - Brahmastra 128 Kbps.jpg",
    src:"./audio/128-Kesariya - Brahmastra 128 Kbps.mp3"
  },
  {
    title:"Maan Meri Jaan",
    artist:"King",
    img_src:"./images/Maan Meri Jaan(PagalWorld.com.se) pic.jpg",
    src:"./audio/Maan Meri Jaan(PagalWorld.com.se).mp3"
  },
  {
    title:"Pyar Hota Kayi Baar Hai",
    artist:"Arijit Singh",
    img_src:"./images/Pyaar Hota Kayi Baar Hai(PagalWorld.com.se) pic.jpg",
    src:"./audio/Pyaar Hota Kayi Baar Hai(PagalWorld.com.se).mp3"
  },
  {
    title:"Raantan Lambiyan",
    artist:" Asees Kaur, Jubin Nautiyal, and Tanishk Bagchi",
    img_src:"./images/Raatan Lambiyan(PagalWorld.com.se) pic.jpg",
    src:"./audio/Raatan Lambiyan(PagalWorld.com.se).mp3"
  }
])
const [currentSongIndex, setCurrentSongIndex] = useState(0);
const [nextSongIndex, setNextSongIndex] = useState(0);

useEffect(()=>{
  setNextSongIndex(()=>{
    if(currentSongIndex+1>songs.length-1){
      return 0;
    }
    else 
    return currentSongIndex+1
  })
},[currentSongIndex, songs.length])

  return (
      <div className="App">
        <Player
          currentSongIndex = {currentSongIndex}
          setCurrentSongIndex = {setCurrentSongIndex}
          nextSongIndex = {nextSongIndex}
          songs = {songs}
        />
      </div>
  );
}

export default App;
