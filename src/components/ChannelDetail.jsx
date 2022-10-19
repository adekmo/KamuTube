import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utiliti/fetchData';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelDetail = () => {

  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  console.log('channel', channel);
  console.log('videos', videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannel(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items));
  }, [id])
  

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,208,247,1) 0%, rgba(106,3,184,1) 100%, rgba(0,112,195,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channel} marginTop="-93px" />
      </Box>
        <Box p={2} display="flex">
          <Box sx={{ mr: { sm: '100px' } }} />
            <Videos videos={videos} />
        </Box>
    </Box>
  )
}

export default ChannelDetail