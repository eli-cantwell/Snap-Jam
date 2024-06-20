import { ReactNode } from "react"
import { Audio } from "../../models/Audio"
import { useAudio, useProject } from "../hooks/useUsers"

interface Props {
  id: number
}

export default function SingleProject(props: Props):ReactNode {

  const projectHook = useProject()
  const audioHook = useAudio()


  const {data: projects, isPending, isError, error} = projectHook.getProjectById(props.id)
 
  const {data: audio, isPending: isPendingAudio, isError: isAudioError, error: audioError } = audioHook.getAudioByProject(Number(projects?.id))
  if (isPending) return (<p>Loading...</p>)

  if (isError) {
    console.log({message: error})
    return (<p>There was an error: {`${error}`}</p>)
  }



  if (isPendingAudio) { console.log('loading audio'); return <p>audioLoading...</p>}
  if (isAudioError) {return <p>{`${audioError}`}</p>}
  const filepath = audio.map((aud: Audio) => aud.filepath)
  

 

    return (
      <>
        <p>{projects?.project_name}</p>
        <p>{filepath}</p>
      </>
    )

}