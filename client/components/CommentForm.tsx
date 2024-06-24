import { useAuth0 } from '@auth0/auth0-react'
import { useGetAddComment } from '../hooks/useUsers'
import { ChangeEvent, useState } from 'react'

interface Props {
  for: number
}

export default function CommentForm(props: Props) {
  const date = Date()

  const [form, setForm] = useState('')

  const { user } = useAuth0()

  const forId = props.for

  const addComment = useGetAddComment(props.for)

  function handleSubmit(e: MouseEvent) {
    e.preventDefault()
    const commentObj = {
      for: forId,
      auth0_id: user?.sub,
      created_by: user?.name,
      user_picture: user?.picture,
      content: form,
      time_created: date,
    }
    addComment.mutate(commentObj)
    console.log(date)
    setForm('')
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm(e.target.value)
  }

  return (
    <div>
      <form>
        <input
          type="text"
          id="comment"
          name="comment"
          onChange={handleChange}
          value={form}
        ></input>
        <button className='button-black' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
