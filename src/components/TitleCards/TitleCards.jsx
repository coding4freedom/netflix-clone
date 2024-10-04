import React, { useEffect, useRef, useState } from 'react';
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from 'react-router-dom';



const TitleCards = ({ title, category}) => {

const [apiData, setApiData] = useState([]);

const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTQwOTExYjZlNTI5YzcyNjIwMDUxMzIzNzlhNGE0ZCIsIm5iZiI6MTcyNzk4MjYyMi4yNjgwMywic3ViIjoiNjZmZWU5OTVlODRlZWIzNWEwZjdlOTZlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.0O9Mx25jRlH4KE_eZ7EFdiY7pJcKbvcX9KHSfAki6s4'
  }
};

const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => {
    const filterData = response.results?.filter(movie => movie.original_language === "en") || []; setApiData(filterData);
  }) 
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel);
},[]);

  return (
    <div className='title__cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card__list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards;