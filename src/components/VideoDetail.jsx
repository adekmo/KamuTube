import { CheckCircle } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utiliti/fetchData'
import Videos from './Videos'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [komen, setKomen] = useState(null);

  const { id } = useParams();

  console.log('komen', komen?.snippet?.topLevelComment?.snippet  );

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));

    fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`)
      .then((data) => setKomen(data.items));

  }, [])


  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.snippet.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
              <Link to={`/channel/${videoDetail?.snippet.channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff" >
                  {videoDetail?.snippet.channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  <VisibilityIcon sx={{ fontSize: "18px", color: "red", mr: "5px" }} />
                  {parseInt(videoDetail?.statistics.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  <ThumbUpIcon sx={{ fontSize: "18px", color: "red", mr: "5px" }} />
                  {parseInt(videoDetail?.statistics.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
            <Stack>
              KOMEN
                {komen?.map((kom, index) => {
                  return(
                    <Box key={index}>
                      <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff" >
                        {kom?.snippet?.topLevelComment?.snippet?.textDisplay}
                      </Typography>
                    </Box>
                  )
                })}
              
            </Stack>
          </Box>
        </Box>

        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetail