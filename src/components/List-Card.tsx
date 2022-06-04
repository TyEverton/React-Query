import { useNavigate } from 'react-router-dom'

type postProps = { item: any }

function ListCard(props: postProps) {
  const navigate = useNavigate()

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
        }}
      >
        {props.item.title}
      </div>
      <div>{props.item.body}</div>
      <button onClick={() => navigate(`/${props.item.id}`)}>
        Show More Details
      </button>
    </div>
  )
}

export default ListCard
