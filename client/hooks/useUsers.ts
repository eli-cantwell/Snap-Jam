import { useQuery } from "@tanstack/react-query"
import { useAuth0 } from "@auth0/auth0-react"
import { QueryClient } from "@tanstack/react-query"
import request from "superagent"
import { User } from "../../models/users"

const rootURL = '/api/v1/users'


export default function useUsers() {
    function useGetAllUsers() {
        const {isAuthenticated, getAccessTokenSilently} = useAuth0()

        return useQuery({
            queryKey: ['users'],
            queryFn: async () => {
                const token = await getAccessTokenSilently()
                if (!token) {
                    throw new Error('Authentication error')
                }
                const result = await request.get(`${rootURL}`).auth(token, {type: 'bearer'})

                return result.body as User[]
            },
            enabled: isAuthenticated, // Only run the query if the user is authenticated
        })
    }

    function useGetUserById(id: number) {
        const {isAuthenticated, getAccessTokenSilently} = useAuth0()

        return useQuery({
            queryKey: ['user'],
            queryFn: async () => {
                const token = await getAccessTokenSilently()
                if (!token) {
                    throw new Error('Authentication error')
                }
                const result = await request.get(`${rootURL}/${id}`).auth(token, {type: 'bearer'})

                return result.body as User
            },
            enabled: isAuthenticated 
        })
    }

    return {
        allUsers: useGetAllUsers,
        userById: useGetUserById
    }
}




// export default function useResponses() {
//   function useAddResponse() {
//     const { getAccessTokenSilently } = useAuth0()
//     const queryClient = useQueryClient()

//     return useMutation({
//       mutationFn: async (response: ResponseData) => {
//         const token = await getAccessTokenSilently()
//         const authorizedResponse = {
//           ...response,
//           user_auth0_sub: token,
//         } as AuthorizedResponseData
//         const res = await request
//           .post(`${rootURL}`)
//           .send(authorizedResponse)
//           .auth(token, { type: 'bearer' })

//         return res.body
//       },
//       onSuccess: () => {
//         queryClient.invalidateQueries({ queryKey: ['responses'] })
//       },
//     })
//   }

//   function useDeleteResponse() {
//     const { getAccessTokenSilently } = useAuth0()
//     const queryClient = useQueryClient()

//     return useMutation({
//       mutationFn: async (id: number) => {
//         const token = await getAccessTokenSilently()
//         const res = await request
//           .delete(`${rootURL}/${id}`)
//           .auth(token, { type: 'bearer' })

//         return res.body
//       },
//       onSuccess: () => {
//         queryClient.invalidateQueries({ queryKey: ['responses'] })
//       },
//     })
//   }

//   return {
//     add: useAddResponse().mutate,
//     allByUser: useGetAllUserResponses,
//     del: useDeleteResponse().mutate,
//   }
// }