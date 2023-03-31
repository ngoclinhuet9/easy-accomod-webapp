import React from 'react'
import { Box, Input, Image, Select } from '@chakra-ui/react'
import SearchIcon from 'assets/svg/search.svg'
import { useHistory } from 'react-router-dom'

function Price() {
  const history = useHistory()
  const onChange = (value: string) => {
    history.push(`/price/${value}`)
  }
  return (
    <Box pl={9} d='flex' h='100%' alignItems='center' mt='15px'>
      <Box boxShadow='1px 1px 4px rgba(0,0,0,.2)' w='200px' borderRadius='6px'>
        <Box
          d='flex'
          alignItems='center'
          py={2}
          px={4}
          h='35px'
          boxSizing='content-box'>
          <Box ml={2} w='100%'>
            <Select
              height='100%'
              width='100%'
              color='black'
              background='transparent'
              border='none'
              px={2}
              placeholder='Select'
              _placeholder={{ color: 'gray' }}
              _focus={{ outline: 'none' }}
              onChange={(event) => onChange(event.target.value)}>
              <option value='0 and 500000'>0 - 500000</option>
              <option value='500000 and 2000000'>500000 - 2000000</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Price
