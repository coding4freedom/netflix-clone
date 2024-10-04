import React, { useEffect, useState } from 'react';
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: '',
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTQwOTExYjZlNTI5YzcyNjIwMDUxMzIzNzlhNGE0ZCIsIm5iZiI6MTcyNzk4MjYyMi4yNjgwMywic3ViIjoiNjZmZWU5OTVlODRlZWIzNWEwZjdlOTZlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.0O9Mx25jRlH4KE_eZ7EFdiY7pJcKbvcX9KHSfAki6s4'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  }, []);

  

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() => navigate(-2)}/>
      <iframe width="90%" height='90%' title='trailer'
       frameBorder='0' allowFullScreen
       src={`https://www.youtube.com/embed/${apiData.key}`}></iframe>
       <div className="player__info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
       </div>
    </div>
  )
}

export default Player;