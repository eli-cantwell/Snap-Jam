import { ReactNode } from "react"
import { Audio } from "../../models/Audio"
import { audio, useGetProjectById } from "../hooks/useUsers"

interface Props {
  id: number
}

export default function SingleProject(props: Props):ReactNode {

  const {data: projects, isPending, isError, error} =  useGetProjectById(props.id)
  const {data: audioData, isPending: isPendingAudio, isError: isAudioError, error: audioError } = audio.useGetAudioByProjectId(Number(projects?.id))

  if (isPending) return (<p>Loading...</p>)
  if (isError) {
    console.log({message: error})
    return (<p>There was an error: {`${error}`}</p>)
  }

  if (isPendingAudio) { console.log('loading audio'); return <p>Audio Loading...</p>}
  if (isAudioError) {return <p>{`${audioError}`}</p>}

  return (
    <>
    <div className="bg-slate-200 h-auto w-1/2 p-4 rounded-lg m-auto border-t-slate-100 border-t-2 border-b-slate-400 border-b-2">
      <p className="text-2xl font-semibold mb-3">{projects?.project_name}</p>
      <p className="text-lg font-normal mb-3 text-gray-500" >By: {projects.created_by}</p>
      {audioData.map((aud: Audio) => <p key={aud.id}>{aud.filepath}</p>)}
      {audioData.map((aud: Audio) => <p className="font-normal text-gray-500" key={aud.length}>Duration: {aud.length}s</p>)}
    </div>  
    </>
  )

}