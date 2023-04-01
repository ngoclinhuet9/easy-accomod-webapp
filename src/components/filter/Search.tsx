/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  Box,
  Flex,
  Button,
  Spacer,
  useDisclosure,
  Image
} from '@chakra-ui/react'
import axios from 'utils/axios'
import City from './City'
import Price from './Price'
import TypeRoom from './TypeRoom'

function Search({params}:any) {
  console.log(params)
  const typeRoomRef = useRef<any>(null);
  const cityRef = useRef<any>(null);
  const priceRef = useRef<any>(null);
    const history = useHistory()
    const onSearch = () => {
      const city = cityRef.current?.getCityState()
      const price = priceRef.current?.getPriceState()
      const roomType = typeRoomRef.current?.getTypeRoomState()
      let minPrice = ''
      let maxPrice = ''
      if (price) {
        const res = price.split(' ')
        minPrice = res[0]
        maxPrice = res[2]
      }
      history.push({
        pathname: '/search',
        state: { city, roomType, minPrice, maxPrice }
      })
    }
    const onClear = () => {
      typeRoomRef.current.childFunction1()
      cityRef.current.childFunction1()
      priceRef.current.childFunction1()
    }

return (
    <Box
        height='85px'
        w='100%'
        mb={5}
        pb={3}
        mt='15px'
        display={{ sm: 'none', md: 'none', lg: 'block' }}
        borderBottom='1px solid rgb(226 232 240)'>
        <Flex
          d='flex'
          w='85%'
          height='100%'
          m='0 auto'
          backgroundColor='blue'
          justifyContent='center'
          alignItems='center'>
          <City ref={cityRef} data={params?.city}/>
          <Price ref={priceRef} />
          <TypeRoom ref={typeRoomRef} value={params?.roomType}/>
          <Box
            h="100%"
            alignItems='center'
            d='flex'
            pl={2}
          >
            <Box pl='2'>
            <Button witdh= '80px' colorScheme='orange' onClick={onSearch}>Search</Button>
            </Box>
            <Box pl='5'>
            <Button witdh= '80px' colorScheme='gray' onClick={onClear}>Clear</Button>
            </Box>
          </Box>
        </Flex>
    </Box>
    )
}

export default Search