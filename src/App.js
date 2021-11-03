import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY, API_CONNECTOR } from './constants/index'
import Photo from './components/Photo';









function App() {

  const [ data, setData] = useState([]);


  useEffect(() => {
    axios.get(`${BASE_URL}${API_CONNECTOR}${API_KEY}`)
    .then(res => {
      console.log(res);
      setData(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])



  return (
    <div className="App">
      <Photo url={data.url}/>
    </div>
  );
}

export default App;
