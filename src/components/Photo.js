import React from 'react';
import Details from '../components/Details';


export default function Photo(props){

    const { url } = props.data;
    const { data } = props;
    console.log(url);


    return (
      <>
        <div className='img-container'>

        <img src={url} alt='Nasa pic of the day' id='main-img' key={url}/>

        </div>

        <Details data={data}/>
      </>

    )

}
