
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import request from 'superagent'
import { User, UserData } from '../../models/users'
import { Project, ProjectData } from '../../models/project'
import { Audio, AudioData } from '../../models/Audio'
import { useMutation } from '@tanstack/react-query'

const rootURL = '/api/v1'

//TODO create types for Comments and Audio
function useGetAllUsers() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      if (!token) {
        throw new Error('Authentication error')
      }
      const result = await request
        .get(`${rootURL}/users`)
        .auth(token, { type: 'bearer' })

      return result.body as User[]
    },
    enabled: isAuthenticated, // Only run the query if the user is authenticated
  })
}

function useGetUserById(id: number) {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      if (!token) {
        throw new Error('Authentication error')
      }
      const result = await request
        .get(`${rootURL}/users/${id}`)
        .auth(token, { type: 'bearer' })

      return result.body as User
    },
    enabled: isAuthenticated,
  })
}

export function useGetAddUser() {
  const { getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (user: UserData) => {
      const token = await getAccessTokenSilently()
      await request
        .post(`${rootURL}/users/addUser`)
        .send(user)
        .auth(token, { type: 'bearer' })
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}

//     const { getAccessTokenSilently } = useAuth0()
//     const queryClient = useQueryClient()

//     return useMutation({
//       mutationFn: async (id: number) => {
//         const token = await getAccessTokenSilently()
//         const res = await request
//           .delete(`${rootURL}/${id}`)
//           .auth(token, { type: 'bearer' })
function useGetUserByAuthId(auth0_id: string) {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  return useQuery({
    queryKey: ['authUser'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      if (!token) {
        throw new Error('Authentication error')
      }
      const result = await request
        .get(`${rootURL}/users/auth0/${auth0_id}`)
        .auth(token, { type: 'bearer' })

      return result.body as User
    },
    enabled: isAuthenticated,
  })
}

export const user = {
  useGetAllUsers,
  useGetUserById,
  useGetUserByAuthId,
}

// export function useProject() {
    export function useGetAllProjects() {
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

    export function useGetProjectById(id: number) {
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

    export function useDeleteProjectById() {
      const { isAuthenticated, getAccessTokenSilently } = useAuth0()

      return useMutation({
        mutationKey: ['deleteProject'],
        mutationFn: async (id: number) => {
          if (!isAuthenticated) {
            throw new Error("Authentication error")
          }
          const token = await getAccessTokenSilently()
          const result = await request.delete(`${rootURL}/projects/${id}`).auth(token, {type: 'bearer'})
          
          return result.body as Project
        },
      })
    }

    export function useCreateProject() {
      const {isAuthenticated, getAccessTokenSilently} = useAuth0()
      const queryClient = useQueryClient()
      return useMutation({
        mutationKey: ['createProject'],
        mutationFn: async (obj: ProjectData) => {
          if (!isAuthenticated) {
            throw new Error('Authentication error')
          }
          const token = await getAccessTokenSilently()
          const result = await request.post(`${rootURL}/projects`).set('Authorization', `Bearer ${token}`).send(obj)

          return result.body
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['projects'] })
        },
      })
    }

    export function useUpdateProjectById() {
      const {isAuthenticated, getAccessTokenSilently} = useAuth0()
      const queryClient = useQueryClient()
      return useMutation({
        mutationKey: ['updateProject'],
        mutationFn: async (obj: ProjectData) => {
          if (!isAuthenticated) {
            throw new Error('Authentication error')
          }
          const token = await getAccessTokenSilently()
          const result = await request.patch(`${rootURL}/projects/updateproject`).set('Authorization', `Bearer ${token}`).send(obj)

          return result.body
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['updateProject'] })
        },
      })
    }

    function useCreateAudio() {
      const {isAuthenticated, getAccessTokenSilently} = useAuth0()
      const queryClient = useQueryClient()
      return useMutation({
        mutationKey: ['createAudio'],
        mutationFn: async (obj: AudioData) => {
          if (!isAuthenticated) {
            throw new Error('Authentication error')
          }
          const token = await getAccessTokenSilently()
          const result = await request.post(`${rootURL}/audio`).set('Authorization', `Bearer ${token}`).send(obj)

          return result.body
        },
        onSuccess: (response) => {
          console.log(response)
          queryClient.invalidateQueries({queryKey: ['projectAudio', response.id]})
        }
      })
    }


    function useGetAllAudio() {
        const {isAuthenticated, getAccessTokenSilently} = useAuth0()


    return useQuery({
      queryKey: ['audios'],
      queryFn: async () => {
        const token = await getAccessTokenSilently()

        if (!token) {
          throw new Error('Authentication Error')
        }
        const result = await request
          .get(`${rootURL}/audio/`)
          .auth(token, { type: 'bearer' })

        return result.body as Audio[]
      },
      enabled: isAuthenticated,
    })
  }

  function useGetAudioById(id: number) {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0()

    return useQuery({
      queryKey: ['audio'],
      queryFn: async () => {
        const token = await getAccessTokenSilently()

        if (!token) {
          throw new Error('Authentication Error')
        }
        const result = await request
          .get(`${rootURL}/audio/${id}`)
          .auth(token, { type: 'bearer' })

        return result.body as Audio
      },
      enabled: isAuthenticated,
    })
  }

    function useGetAudioByProjectId(id: number | undefined) {
        const {isAuthenticated, getAccessTokenSilently} = useAuth0()

        return useQuery({
            queryKey: ['projectAudio', id],
            queryFn: async () => {
                const token = await getAccessTokenSilently()

        if (!token) {
          throw new Error('Authentication Error')
        }
        const result = await request
          .get(`${rootURL}/audio/byProject/${id}`)
          .auth(token, { type: 'bearer' })

                return result.body as Audio[]
            },
            enabled: isAuthenticated && id != undefined
        })
    }

    export const audio = {
        useGetAllAudio,
        useGetAudioById,
        useGetAudioByProjectId,
        useCreateAudio
    }
    
    function useGetAllComments() {
        const {isAuthenticated, getAccessTokenSilently} = useAuth0()


  return useQuery({
    queryKey: ['comments'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()

      if (!token) {
        throw new Error('Authentication Error')
      }
      const result = await request
        .get(`${rootURL}/comments`)
        .auth(token, { type: 'bearer' })

      return result.body //Comment
    },
    enabled: isAuthenticated,
  })
}

function useGetCommentsByProject(id: number) {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  return useQuery({
    queryKey: ['projectComment', id],
    queryFn: async () => {
      const token = await getAccessTokenSilently()

      if (!token) {
        throw new Error(`Authentication Error`)
      }
      const result = await request
        .get(`${rootURL}/comments/project/${id}`)
        .auth(token, { type: 'bearer' })

      return result.body //as Comment
    },
    enabled: isAuthenticated,
  })
}
export const comments = {
  useGetAllComments,
  useGetCommentsByProject,
}

export function useGetAddComment(id: number) {
  const { getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (comment) => {
      const token = await getAccessTokenSilently()
      await request
        .post(`${rootURL}/comments/addcomment`)
        .send(comment)
        .auth(token, { type: 'bearer' })
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['projectComment', id] })
    },
  })
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
