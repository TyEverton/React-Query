import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function DetailsPage() {
  const params = useParams()

  const [data, SetData] = useState<any>()

  const getMoreData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => {
        SetData(response.data)
        console.log(response.data)
      })
  }

  useEffect(getMoreData, [])

  return (
    <div>
      <h1>Title:{data?.title}</h1>
      <h1>Body: {data?.body}</h1>
    </div>
  )
}

export default DetailsPage
