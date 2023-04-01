import React, { useEffect, useState } from 'react'
import Search from 'components/filter/Search'
import RoomList from 'components/roomlist/RoomList'
import Layout from 'layouts/Layout'
import axios from 'utils/axios'
import { useHistory, useParams } from 'react-router-dom'
import { Text, Box } from '@chakra-ui/react'

type Params = {
  city: string
}

const City = () => {
  const [roomList, setRoomList] = useState([])
  const params: Params = useParams()
  const history = useHistory()
  const cities = {
    hanoi: 'Hà Nội',
    hcm: 'Hồ Chí Minh',
    nhatrang: 'Nha Trang',
    dalat: 'Đà Lạt',
    danang: 'Đà Nẵng',
    vungtau: 'Vũng Tàu',
    hoian: 'Hội An',
    quangninh: 'Quảng Ninh',
  } as any
  useEffect(() => {
    axios
      .get('/rooms', { params: history.location.state })
      .then((res) => {
        setRoomList(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [params?.city])
  return (
    <Layout title={cities[params?.city]}>
      <Search params={history.location.state} />
      <Text fontSize='28px' fontWeight='semibold' mx={22} mt={5} ml='125px'>
        {`Kết quả search- ${roomList?.length} phòng`}
      </Text>
      <RoomList roomList={roomList} />
    </Layout>
  )
}

export default City
