import { User, useAuth0 } from '@auth0/auth0-react'
import { useGetAddUser, user } from '../hooks/useUsers'
import { UserData } from '../../models/users'
import { useNavigate } from 'react-router-dom'

export default function CheckRegistered() {
  const { user: authData } = useAuth0()

  const navigate = useNavigate()

  const addUser = useGetAddUser()

  const {
    data: checkUser,
    isPending,
    isError,
  } = user.useGetUserByAuthId(authData?.sub)

  if (isPending) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>Something went wrong</h1>
  }

  function handleClick() {
    if (checkUser == undefined) {
      const userObj: UserData = {
        auth0_id: authData?.sub,
        user_name: authData?.nickname,
        pwd: 'no password',
        email: authData?.email,
        full_name: authData?.name,
      }
      addUser.mutate(userObj)
      console.log(userObj)
    }
    navigate('/')
  }

  console.log('User:' + authData?.sub)
  console.log()

  return <button onClick={handleClick}>Take me to SnapJam</button>
}
