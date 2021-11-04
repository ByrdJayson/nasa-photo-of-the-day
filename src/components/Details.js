import React from 'react'
import styled from 'styled-components';

export default function Details(props){

  const { title, date, explanation, url, copyright } = props.data;

  const StyledDetails = styled.div`
    background-color: #f4f4f4;
    display:flex;
    flex-flow: column wrap;

    p {
        line-height: 2.5rem;
        padding: 1rem 3rem;

}

    a {
      color: black;
    }

    h4::before {
      content: '📅 ';
    }
  `


  return (

    <StyledDetails>
      <h1>{title}</h1>
      <h3>{copyright}</h3>
      <h4>{date}</h4>
      <p>{explanation}</p>
      <a href={url}>{url}</a>
      <h6>Jayson Byrd - 2021</h6>
    </StyledDetails>

  )
}
