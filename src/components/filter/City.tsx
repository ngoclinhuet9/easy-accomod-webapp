import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { Box, Input, Image, Select } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

const City = forwardRef((props: any, ref) => {
  const [city, setCity] = useState('')
  useImperativeHandle(
    ref,
    () => ({
      childFunction1() {
        setCity('')
      },
      getCityState() {
        return city
      },
    }),
    [city]
  )

  useEffect(() => {
    setCity(props.data)
  }, [props])

  const onChange = (value: string) => {
    setCity(value)
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
              value={city}
              placeholder='Chọn thành phố'
              _placeholder={{ color: 'gray' }}
              _focus={{ outline: 'none' }}
              onChange={(event) => onChange(event.target.value)}>
              <option value='hanoi'>Hà Nội</option>
              <option value='hcm'>Hồ Chí Minh</option>
              <option value='danang'>Đà Nẵng</option>
              <option value='dalat'>Đà Lạt</option>
              <option value='vungtau'>Vũng Tàu</option>
              <option value='nhatrang'>Nha Trang</option>
              <option value='hoian'>Hội An</option>
              <option value='quangninh'>Quảng Ninh</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  )
})

export default City
