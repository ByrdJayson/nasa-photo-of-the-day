import axios from 'axios';
import React, { useState, useEffect } from 'react';
export default function Content(){

 const BASE_URL = 'https://api.nasa.gov/planetary/apod';
 const API_KEY = 'VGN6274oSM2OuUCGVkvaseNurrInl4X32Lbem3nY';
 const API_CONNETOR = '?api_key=';



 const [ image, setImage] = useState(null);
 const [ title, setTitle] = useState(null);
 const [ copyright, setCopyright] = useState(null);
 const [ date, setDate] = useState(null);
 const [ explanation, setExplanation] = useState(null);
 useEffect(() => {
  const api_link = `${BASE_URL}${API_CONNETOR}${API_KEY}`;
  axios.get(`${api_link}`)
  .then(res => {
   setImage(res.data.url);
   setTitle(res.data.title);
   setDate(res.data.date);
   setCopyright(res.data.copyright);
   setExplanation(res.data.explanation);

   console.log(res);

 }).catch(err =>{
   console.error(err);
 })
}, [] );
  return (
    <div>
      <div>
        <img src={image} alt={title}/>
      </div>

      <div>
        <h1>{title}</h1>
        <p></p>
        <h2>{copyright}</h2>
        <h2>{date}</h2>
        <p>{explanation}</p>
      </div>
    </div>
  );
}
 
