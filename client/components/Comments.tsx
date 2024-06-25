import { useParams } from 'react-router-dom'
import { comments } from '../hooks/useUsers'
import { useAuth0 } from '@auth0/auth0-react'
import { useDeleteCommentById } from '../hooks/useUsers'

interface Comment {
  id: number
  for: number
  auth0_id: string
  content: string
  time_created: string
}

interface Props {
  id: number
}

export default function Comments(props: Props) {
  const id = props.id

  const { user } = useAuth0()
  const deleteComment = useDeleteCommentById()

  const {
    data: commentsData,
    isPending,
    isError,
    error,
  } = comments.useGetCommentsByProject(id)

  isPending && <p>Loading...</p>

  if (isError) {
    console.log({ message: error })
    return <p>There was an error: {`${error}`}</p>
  }

  function handleDelete(obj: Comment) {
    if ( obj.auth0_id == user?.sub ) {
    deleteComment.mutateAsync(obj.id)
    }
    else {console.log('No allowed')}
  }

  
  console.log(commentsData)
  console.log(user?.picture)

  return (
    <div>
      {/* Debugging code */}
      {/* <pre>{JSON.stringify(commentsData, 0, 2)}</pre> */}
      {commentsData &&
        Array.isArray(commentsData) &&
        commentsData.map((comment: Comment) => (
          <div key={comment.id} className="single-comment-div">
            <div className="">
              <img
                src={comment.user_picture}
                alt={'??'}
                className="m-2 h-10 rounded-full"
              ></img>
            </div>
            <div className="m-2">
              <p>{comment.created_by + ' | ' + comment.time_created}</p>
              <p className="">{comment.content}</p>
            </div>
            <button onClick={() => {handleDelete(comment)}} className='mr-4 mx-auto hover:scale-110'>❌</button>
          </div>
        ))}
    </div>
  )
}
