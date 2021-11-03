import React from 'react'



export default function Photo(props){

    const { url } = props;
    console.log(url);


    return (
      <div className='img-container'>

        <img src={url} alt='Nasa pic of the day' id='main-img' key={url}/>
 
      </div>

    )

}
