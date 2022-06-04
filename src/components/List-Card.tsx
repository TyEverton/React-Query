import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type postProps = { item: any }

function ListCard(props: postProps) {
  // below is an anonymous function | defining a function, but not giving it a name
  // also known as inlining a function

  const [postData, setPostData] = useState<any>([])

  const navigate = useNavigate()

  const toIndividualPost = () => {
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/posts/${props.item.id}`)
    //   .then((response) => {
    //     setPostData(response.data)
    //   })
  }

  //   useEffect(() => {}, [])

  return (
    <div
      style={{
        border: 'solid',
        borderColor: 'red',
        borderWidth: 2,
        marginBottom: 15,
        padding: 10,
      }}
    >
      <div
        style={{
          width: 500,
          color: 'blue',
          fontWeight: 'bold',
          textDecoration: 'underline',
        }}
      >
        {props.item.id}
      </div>
      <div>{props.item.body}</div>
      <button onClick={() => navigate(`/${props.item.id}`)}>
        Show More Details
      </button>
    </div>
  )
}

export default ListCard
