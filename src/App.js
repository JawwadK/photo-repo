import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
    
  const[photos, setPhotos] = useState([]);
  const[albumNo, setAlbumNo] = useState(1);

  const PHOTOAPI = "https://jsonplaceholder.typicode.com/photos";
  const getPhotos = async () => {
    try {
        const { data } = await axios.get(PHOTOAPI);
        return data;
    } catch (error) {
        return error;
    }
  };

  useEffect(() => {
    setTimeout(async () => {
        setPhotos(await getPhotos());
    }, 0);
  }, [albumNo]);


    return (
      <div className="App">
        
        <div class="titlestuff">
        <div>Photo Renderer</div>
        <input type="number" min="1" max="100" value={albumNo} onChange={event => setAlbumNo(event.target.value)}/>
        </div>
        <div class= "photogrid">
        {photos.filter(function({albumId}){ return albumNo == albumId}).map(({id, thumbnailUrl, title, url}) => (<div className="image" key={id}><a  href={url}><img alt={title} src={thumbnailUrl}/></a></div>))}
        {console.log(photos, albumNo)}
        </div>
      </div>
    );
}

export default App;

