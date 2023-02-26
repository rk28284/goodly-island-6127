import React, { useEffect } from 'react'
import { Box, Select, Text } from '@chakra-ui/react'
import {FormControl,FormLabel,} from '@chakra-ui/react'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate=useNavigate()

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    if (selectedCity === 'Pune') {
      navigate('/pune');
    }
  }

  return (
    <div>
      <div>
        <img width="100%" src="https://www.zoomcar.com/img/background.png" alt="ladingPage" />
      </div>
      <div style={{marginTop:"2%"}}>
        <Text fontSize='xl' fontFamily="IBM Plex Sans" fontWeight={"600"} color="gray.500">
          Oops! Looks like we don’t serve in your city
        </Text>
      </div>
      <div>
        <Text fontSize='2xl' fontFamily="IBM Plex Sans" fontWeight={"600"} margin={"30px"} color="black.500">
          Select a different Location
        </Text>
      </div>
      <div>
        <Box>
          <FormControl>
            <FormLabel>Choose Your Favourite City</FormLabel>
            <Select onChange={handleCityChange} placeholder='Select City' textAlign={"left"}>
              <option>Pune</option>
              <option>Delhi</option>
              <option>Lucknow</option>
              <option>Patna</option>
              <option>Jaipur</option>
              <option>Siliguri</option>
              <option>Bhubaneswar</option>
              <option>Raipur</option>
            </Select>
          </FormControl>
        </Box> 
      </div>
      <br />
      <br />
      <Footer/>
    </div>
  )
}

export default LandingPage
