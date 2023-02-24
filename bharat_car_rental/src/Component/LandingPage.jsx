import React from 'react'
import { Box, Select, Text } from '@chakra-ui/react'
import Footer from './Footer'

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
      <div>
       <Box>
      
      <Select variant="flushed" ml={3}  placeholder="Themed flushed select">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        </Box> 
      </div>
      <br />
      <br />
      <Footer/>
    </div>
  )
}

export default LandingPage
