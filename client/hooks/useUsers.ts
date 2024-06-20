import { useQuery } from "@tanstack/react-query"
import { useAuth0 } from "@auth0/auth0-react"
import request from "superagent"
import { User } from "../../models/users"
import { Project } from "../../models/project"

const rootURL = '/api/v1/'

//TODO create types for Comments and Audio
export function useUser() {
    function useGetAllUsers() {
        const {isAuthenticated, getAccessTokenSilently} = useAuth0()

        return useQuery({
            queryKey: ['users'],
            queryFn: async () => {
                const token = await getAccessTokenSilently()
                if (!token) {
                    throw new Error('Authentication error')
                }
                const result = await request.get(`${rootURL}/users`).auth(token, {type: 'bearer'})

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
                const result = await request.get(`${rootURL}/users/${id}`).auth(token, {type: 'bearer'})

                return result.body as User
            },
            enabled: isAuthenticated 
        })
    }

    return {
        getUsers: useGetAllUsers,
        userById: useGetUserById
    }
}

export function useProject() {
    function useGetAllProjects() {
        const {isAuthenticated, getAccessTokenSilently} = useAuth0()

        return useQuery({
            queryKey: ['projects'],
            queryFn: async () => {
                const token = await getAccessTokenSilently()
                if (!token) {
                    throw new Error('Authentication Error')
                }
                const result = await request.get(`${rootURL}/projects`).auth(token, {type: 'bearer'})

                return result.body as Project[]
            },
            enabled: isAuthenticated,
        })
    }

    function useGetProjectById(id: number) {
        const {isAuthenticated, getAccessTokenSilently} = useAuth0()

        return useQuery({
            queryKey: ['project'],
            queryFn: async () => {
                const token = await getAccessTokenSilently()
                if (!token) {
                    throw new Error("Authentication error")
                }
                const result = await request.get(`${rootURL}/projects/${id}`).auth(token, {type: 'bearer'})

                return result.body as Project
            },
            enabled: isAuthenticated,
        })
    }

    return {
        getProjects: useGetAllProjects,
        getProjectById: useGetProjectById,
    }
}

export function useAudio() {
    function useGetAllAudio() {
        const {isAuthenticated, getAccessTokenSilently} = useAuth0()

        return useQuery({
            queryKey: ['audios'],
            queryFn: async () => {
                const token = await getAccessTokenSilently()

                if (!token) {
                    throw new Error("Authentication Error")
                }
                const result = await request.get(`${rootURL}/audio/`).auth(token, {type: 'bearer'})

                return result.body // as Audio[]
            },
            enabled: isAuthenticated
        })
    }

    function useGetAudioById(id: number) {
        const {isAuthenticated, getAccessTokenSilently} = useAuth0()

        return useQuery({
            queryKey: ['audio'],
            queryFn: async () => {
                const token = await getAccessTokenSilently()

                if (!token) {
                    throw new Error('Authentication Error')
                }
                const result = await request.get(`${rootURL}/audio/${id}`).auth(token, {type: 'bearer'})

                return result.body //as Audio
            },
            enabled: isAuthenticated
        })
    }



    function useGetAudioByProjectId(id: number) {
        const {isAuthenticated, getAccessTokenSilently} = useAuth0()

        return useQuery({
            queryKey: ['projectAudio'],
            queryFn: async () => {
                const token = await getAccessTokenSilently()

                if(!token) {
                    throw new Error('Authentication Error')
                }
                const result = await request.get(`${rootURL}/projectAudio/${id}`).auth(token, {type: 'bearer'})

                return result.body //as Audio
            },
            enabled: isAuthenticated
        })
    }

    return {
        getAudio: useGetAllAudio,
        getAudioById: useGetAudioById,
        getAudioByProject: useGetAudioByProjectId
    }
    
}

export function useComment() {
    function useGetAllComments() {
        const {isAuthenticated, getAccessTokenSilently} = useAuth0()

        return useQuery({
            queryKey: ['comments'],
            queryFn: async () => {
                const token = await getAccessTokenSilently()

                if (!token) {
                    throw new Error('Authentication Error')
                }
                const result = await request.get(`${rootURL}/comments`).auth(token, {type: 'bearer'})

                return result.body //Comment
            },
            enabled: isAuthenticated
        })
    }

    function useGetCommentById(id: number) {
        const {isAuthenticated, getAccessTokenSilently} = useAuth0()

        return useQuery({
            queryKey: ['comment'],
            queryFn: async () => {
                const token = await getAccessTokenSilently()
                
                if (!token) {
                    throw new Error(`Authentication Error`)
                }
                const result = await request.get(`${rootURL}/comments/${id}`).auth(token, {type: 'bearer'})

                return result.body //as Comment
            },
            enabled: isAuthenticated
        })
    }
    return {
        getComments: useGetAllComments,
        getCommentById: useGetCommentById
    }
}



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