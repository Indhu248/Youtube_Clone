import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'afc6f3c024msh060326ffa11d28ep1f2019jsn49cddb72f50c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
  }