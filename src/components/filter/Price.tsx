import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Box, Input, Image, Select } from '@chakra-ui/react'
import SearchIcon from 'assets/svg/search.svg'
import { useHistory } from 'react-router-dom'

const Price = forwardRef((props, ref) => {
  const [price, setPrice] = useState('')
  useImperativeHandle(
    ref,
    () => ({
      childFunction1() {
        setPrice('')
      },
      getPriceState() {
        return price
      },
    }),
    [price]
  )
  const onChange = (value: string) => {
    setPrice(value)
  }
  return (
    <Box pl={4} d='flex' h='100%' alignItems='center'>
      <Box boxShadow='1px 1px 4px rgba(0,0,0,.2)' w='300px' borderRadius='6px'>
        <Box
          d='flex'
          alignItems='center'
          py={2}
          px={2}
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
              value={price}
              placeholder='Chọn khoảng giá'
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
})

export default Price
