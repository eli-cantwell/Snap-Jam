import { useParams } from 'react-router-dom'
import { comments } from '../hooks/useUsers'

export default function Comments() {
  const { id } = useParams()

  const {
    data: commentsData,
    isPending,
    isError,
    error,
  } = comments.useGetCommentsByProject(Number(id))

  isPending && <p>Loading...</p>

  if (isError) {
    console.log({ message: error })
    return <p>There was an error: {`${error}`}</p>
  }

  console.log(commentsData)

  return (
    <div>
      {/* <pre>{JSON.stringify(commentsData, 0, 2)}</pre> */}
      {commentsData.map((comment) => (
        <p key={comment.id}>{comment.content}</p>
      ))}
    </div>
  )
}
