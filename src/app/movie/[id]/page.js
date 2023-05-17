import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../../styles/common.module.css";
//This is making dynamic route
const page = async({params}) => {
  const id=params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8b9fec66e0msha022e708228b61dp16bfa0jsne6732ef0472d',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  const res= await fetch(url, options);
  if(!res.ok)
  {
    console.log(`Error! status : ${res.status}`);
  }
  const data= await res.json();
  console.log(data);
  const main_data= data[0].details;
  return (
    
   <div className={styles.container}>
    <h2 className={styles.movie_title}>
           Netflix \ <span> {main_data.type}</span>
    </h2>
    <div className={styles.card_section}>
         <div>
          <Image src={main_data.backgroundImage.url} alt={main_data.title} height={300} width={600}/>
         </div>
         <div>
          <h1>{main_data.title}</h1>
          <p>{main_data.synopsis}</p>
         </div>
    </div>
   </div>
   
  )
}

export default page;
