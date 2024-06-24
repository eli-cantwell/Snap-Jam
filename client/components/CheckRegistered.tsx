import { useAuth0 } from '@auth0/auth0-react'
import { useGetAddUser, user } from '../hooks/useUsers'
import { UserData } from '../../models/users'


export default function CheckRegistered() {
  const { user: authData } = useAuth0()

  const addUser = useGetAddUser()

  const authId = user.use

  function handleClick() {
    if (user.sub)
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

  console.log('User:' + user?.sub)
  console.log()

  return <button onClick={handleClick}>Take me to SnapJam</button>
}
