import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL,
    params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

// function allows us to call api, pass dynamic url, call it within any component in application
export const fetchFromAPI = async (url) => {
    const {data}= await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}
