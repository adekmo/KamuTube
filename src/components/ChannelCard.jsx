import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utiliti/constan';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#FFF' }}>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{ widht: '180px', height: '180px', borderRadius: '50%', mb: 2, border: '1px solid #e3e3e3' }} />

          <Typography variant="h6">
            {channelDetail?.snippet?.title}{' '}
            <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}

        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard