// starting point of application
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
// import Navbar from './components/Navbar';
// import Feed from './components/Feed';
// import VideoDetail from './components/VideoDetail';
// import ChannelDetail from './components/ChannelDetail';
// import SearchFeed from './components/SearchFeed';
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components';


const App = () => (
  <BrowserRouter>
    <Box
    sx={{backgroundColor: '#000'}}
    >
        <Navbar/>
        <Routes>
            {/* Root route; The exact prop tells the Router component to match the path exactly. If you don't add the exact prop on the / path, it will match with all the routes starting with a '/', 
            eg: /about */}
            <Route path="/" exact element={<Feed/>}/>
            {/* specific video page */}
            <Route path="/video/:id" element={<VideoDetail/>}/>
            <Route path="/channel/:id" element={<ChannelDetail/>}/>
            <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
        </Routes>
    </Box>
  </BrowserRouter>
)

export default App;
