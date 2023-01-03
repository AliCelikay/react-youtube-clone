import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import {useParams} from 'react-router-dom';

// import Videos from './Videos'
import { Videos } from './'; // ./components

import { fetchFromAPI } from '../utils/fetchFromApi';


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  // reading searchterm in params implemented by the navigate hook in SearchBar.jsx
  const { searchTerm } = useParams();

  // to load the page of content search by navbar
  useEffect(() => {
    // using the searchTerm in params implemented by navigate hook in SearchBar.jsx
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))

    // searchTerm as the dependency array so code will run only when a new search 
  }, [searchTerm]);


  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search Results for: <span style={{ color: '#FC1503' }}>{searchTerm}</span> Videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  )
}

export default SearchFeed;
