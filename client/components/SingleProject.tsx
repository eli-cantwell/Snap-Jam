import { Audio } from "../../models/Audio"
import { useAudio, useProject } from "../hooks/useUsers"

interface Props {
  id: number
}

export default function SingleProject(props: Props) {

  
  


  const projectHook = useProject()
  const audioHook = useAudio()


  const {data: projects, isPending, isError, error} = projectHook.getProjectById(props.id)

  if (isPending) return (<p>Loading...</p>)

  if (isError) {
    console.log({message: error})
    return (<p>There was an error: {`${error}`}</p>)
  }
 
  const projId:number = projects.id
 
  
  const {data: audio, isPending: isPendingAudio, isError: isAudioError, error: audioError } = audioHook.getAudioByProject(projId)

  if (isPendingAudio) {return console.log('loading')}
  if (isAudioError) {return <p>{`${audioError}`}</p>}
  const filepath = audio.map((aud: Audio) => aud.filepath)
  

 

    return (
      <>
        <p>{projects?.project_name}</p>
        <p>{filepath}</p>
      </>
    )

}