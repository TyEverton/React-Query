import axios from 'axios'
import { useQuery } from 'react-query'

import ListCard from '../components/List-Card'

function ListPage() {
  const fetchApiData = () => {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.data
      })
  }

  const query = useQuery('keys', fetchApiData)

  console.log(query)
  return (
    <div>
      {query.data?.map((item: any) => {
        return <ListCard key={item.title} item={item} />
      })}
    </div>
  )
}

export default ListPage
