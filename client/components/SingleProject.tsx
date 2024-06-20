import { useAudio, useProject } from "../hooks/useUsers"

interface Props {
  id: number
}

export default function SingleProject(props: Props) {

  const projectHook = useProject()
  const audioHook = useAudio()

  const {data: projects, isPending, isError, error} = projectHook.getProjectById(props.id)
  
  // const {data: audio } = audioHook.getAudioById() //TODO getAudioByProjectId


  isPending && <p>Loading...</p>

  if (isError) {
    console.log({message: error})
    return (<p>There was an error: {`${error}`}</p>)
    }

    return (
      <>
        <p>{projects?.project_name}</p>
      </>
    )

}