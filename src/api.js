import axios from 'axios';
import React, { useState, useEffect } from 'react';
export default function Content(){

 const BASE_URL = 'https://api.nasa.gov/planetary/apod';
 const API_KEY = 'VGN6274oSM2OuUCGVkvaseNurrInl4X32Lbem3nY';
 const API_CONNETOR = '?api_key=';


 
 const [ data, setData] = useState('')
 useEffect(() => {
  const api_link = `${BASE_URL}${API_CONNETOR}${API_KEY}`;
  axios.get(`${api_link}`)
  .then(res => {
   setData(res);
   console.log(res);

 }).catch(err =>{
   console.error(err);
 })
}, [] );
  return (
    <div></div>
  );
}
