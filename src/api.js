import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Content(){

const StyledImage = styled.img`
  width: 55%;
  margin:3rem;
  border: 5px solid black;

`

const StyledImgDiv = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: silver;

`

const StyledMainP = styled.p`



`

const StyledContentContainer = styled.div`
display: flex;
justify-content: center;
width: 80%

`



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
    <StyledImgDiv class='img-container'>
      <div>
        <StyledImage src={image} alt={title}/>
      </div>

      <div class='content-container'>
        <h1>{title}</h1>
        <div>
        <h2>{copyright}</h2>
        <h2>{date}</h2>
        </div>
        <StyledContentContainer><StyledMainP>{explanation}</StyledMainP></StyledContentContainer>
      </div>
    </StyledImgDiv>
  );
}
