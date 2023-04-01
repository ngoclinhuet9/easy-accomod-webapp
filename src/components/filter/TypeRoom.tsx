import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Box, Input, Image, Select } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

const TypeRoom = forwardRef((props: any, ref) => {
  const [typeRoom, setTypeRoom] = useState('')
  useImperativeHandle(
    ref,
    () => ({
      childFunction1() {
        setTypeRoom('')
      },
      getTypeRoomState() {
        return typeRoom
      },
    }),
    [typeRoom]
  )

  const onChange = (value: string) => {
    setTypeRoom(value)
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
              placeholder='Chọn loại phòng'
              _placeholder={{ color: 'gray' }}
              _focus={{ outline: 'none' }}
              value={typeRoom}
              onChange={(event) => onChange(event.target.value)}>
              <option value='hotel'>Khách Sạn</option>
              <option value='motel'>Nhà Trọ</option>
              <option value='motel'>Nhà Nguyên Căn</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  )
})
export default TypeRoom
