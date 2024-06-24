import { useParams } from 'react-router-dom'
import { comments } from '../hooks/useUsers'
import { useAuth0 } from '@auth0/auth0-react'

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

  console.log(commentsData)
  console.log(user?.picture)

  return (
    <div>
      {/* Debugging code */}
      {/* <pre>{JSON.stringify(commentsData, 0, 2)}</pre> */}
      {commentsData &&
        Array.isArray(commentsData) &&
        commentsData.map((comment) => (
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
          </div>
        ))}
    </div>
  )
}
