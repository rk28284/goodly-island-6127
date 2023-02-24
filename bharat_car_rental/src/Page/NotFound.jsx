import React from 'react'
import { Text,HStack } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
const NotFound = () => {
  return (
    <div>
        <HStack>

  <Icon as={MdGroupWork} w={8} h={8} color='red.500' />
      <Text>Pages Not Found</Text>
      </HStack>
    </div>
  )
}

export default NotFound
