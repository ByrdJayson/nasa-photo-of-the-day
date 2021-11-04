import React from 'react';
import styled from 'styled-components';

export default function Photo(props){

    const { url } = props.data;
    const StyledPhoto = styled.div`
    background-color: midnightblue;

      img {
        width: 50;
        margin: 2rem;
        border: 3px solid black;
        filter: drop-shadow(0 0 2.5rem black);
      }



    `


    return (
      <>
        <StyledPhoto>

          <img src={url} alt='Nasa pic of the day' id='main-img' key={url}/>

        </StyledPhoto>
      </>

    )

}
