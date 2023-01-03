import React from 'react'
import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'

// import Sidebar from './Sidebar'
// import Videos from './Videos'
import {Sidebar, Videos} from './';// ./components

import { fetchFromAPI } from '../utils/fetchFromApi';


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  
  // a lifecycle hook that gets called when component initially loads
  useEffect(() => {
    // async functions must chain a .then promise
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))

    // selectedCategory as the dependency array so code will run only when a new category is selected
  }, [selectedCategory]);
  
  
  return (
    <Stack
      // second sx means 'usually', usually column, except on medium and larger will be row 
      sx={{ flexDirection: { sx: "column", md: "row" } }}
    >
      <Box
        sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography 
          className="copyright"
          variant="body2"
          sx={{mt:1.5, color: '#fff'}}
        >
          ©Copyright 2023 Ali Celikay
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height:'90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style={{color: '#F31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed;
