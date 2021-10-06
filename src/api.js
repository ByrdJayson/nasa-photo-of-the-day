import axios from 'axios';
export default function Api(){

 const BASE_URL = 'https://api.nasa.gov/planetary/apod';
 const API_KEY = 'VGN6274oSM2OuUCGVkvaseNurrInl4X32Lbem3nY';
 const API_CONNETOR = '?api_key';


 const api_link = `${BASE_URL}${API_CONNETOR}${API_KEY}`;

 axios.get(api_link)
 .then()

}
