import React from 'react'


export default function Details(props){

  const { title, date, explanation, url, copyright } = props.data;




  return (

    <div className='text-container'>
      <h1>{title}</h1>
      <h3>{copyright}</h3>
      <h3>{date}</h3>
      <p className='explanation'>{explanation}</p>
      <h5 className='url'>{url}</h5>
    </div>

  )
}
