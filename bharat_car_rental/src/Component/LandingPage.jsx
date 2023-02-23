import React from 'react'
import { Text } from '@chakra-ui/react'
const LandingPage = () => {
  return (
    <div>
      <div>
        <img width="100%" src="https://www.zoomcar.com/img/background.png" alt="ladingPage" />
      </div>
      <div style={{marginTop:"2%"}}>
    <Text fontSize='xl' fontFamily="IBM Plex Sans" fontWeight={"600"}   color="gray.500">
    Oops! Looks like we don’t serve in your city
    </Text>
      </div>
      <div>
      <Text fontSize='2xl' fontFamily="IBM Plex Sans" fontWeight={"600"} margin={"30px"}  color="black.500">
      Select a different Location
    </Text>
      </div>
    </div>
  )
}

export default LandingPage
