import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import CreatePlace from 'pages/owner/CreatPlace'
import { useParams } from 'react-router-dom'
import axios from 'utils/axios'
import { Popup } from 'react-leaflet'

type Params = {
  room_id: string
}
function RentPopup() {
  const params: Params = useParams()
  const [rentRoom, setRentRoom] = useState<any>([])
  useEffect(() => {
    axios
      .get(`/rooms/${params?.room_id}`)
      .then((res) => {
        setRentRoom(res.data.data.room)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <Box>
      <Popup>
        <text>hellow</text>
      </Popup>
    </Box>
  )
}

export default RentPopup
