import Link from 'next/link';
import React from 'react'
import styles from '../styles/common.module.css';
import MovieCard from '../components/MovieCard';
const Movie = async() => {


  const url = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8b9fec66e0msha022e708228b61dp16bfa0jsne6732ef0472d',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
const res= await fetch(url, options);
const data= await res.json();
const main_data= data.titles;
// console.log(data);
  return (
      <>
      <section className={`${styles.movieSection}`}> 
        <div className={`${styles.container}`}>
      <h1>
       Series and Movies 
      </h1>
      <div className={styles.card_section}>      {
        main_data.map((curElem)=>{
            return <MovieCard key={curElem.id}{...curElem}/>
        })
      }
      </div>

      </div>
      </section>
      </>
  )
}

export default Movie;

