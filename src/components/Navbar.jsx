import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
// import { logo } from '../utiliti/constan'
import SearchBar from './SearchBar'
import MovieCreationIcon from '@mui/icons-material/MovieCreation';


const Navbar = () => {
  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center'}}>
        <MovieCreationIcon sx={{ fontSize: "70px", color: "red", ml: "30px" }} />
        
          <Typography variant="h6" color="white" ml="-35px" sx={{fontWeight: 'bold'}}>
            Kamu
          </Typography>
          <Typography variant="h5" color="red">
            Tube
          </Typography>

        {/* <img src={logo} alt="logo" height={45} /> */}
      </Link>

      <SearchBar />
    </Stack>
  )
}

export default Navbar