import React from 'react'
import {Box, CardContent, CardMedia, Typography} from '@mui/material';
// icon
import { CheckCircle} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({channelDetail, marginTop}) => (
    <Box
        sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: {xs: '356px', md: '320px'},
            height: '326px',
            margin: 'auto',
            // this will display only when passing in a prop
            // marginTop: marginTop
            marginTop,
        }}
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#FFF'}}>
                <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                alt={channelDetail?.snippet?.title}    
                sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}}
            />
            <Typography variant="h6">
                {channelDetail?.snippet?.title}
                <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px'}}/>
            </Typography>
            {/* this will only show up on the specific channel page because only in channel page do have access to the statistics data from the api call */}
            {channelDetail?.statistics?.subscriberCount && (
                <Typography>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                </Typography>
            )}
            </CardContent>
        </Link>
    </Box>
)

export default ChannelCard
