import { ReactNode } from "react"
import { Audio } from "../../models/Audio"
import { audio, useGetProjectById } from "../hooks/useUsers"

interface Props {
  id: number
}
//TODO change this component so an object is passed in rather than just the id. 
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
    <div className="bg-slate-300 h-auto w-1/2 rounded-md m-auto border-t-white border-t-2 border-b-slate-400 border-b-2 mt-5 overflow-auto pb-4">
      <div className="bg-gray-400 w-full p-2 mb-4 pr-2 rounded-t-md border-b-2 border-slate-500 flex justify-between align-middle">
        <p className="ml-2 text-2xl font-semibold text-white">{projects?.project_name}</p>
        <p className="text-lg ml-4 font-normal text-gray-500 mr-2" >By: {projects.created_by}</p>
      </div>
    
      
      {audioData.map((aud: Audio) => <p className=" ml-4" key={aud.id}>{aud.filepath}</p>)}
      {audioData.map((aud: Audio) => <p className=" ml-4 font-normal text-gray-500" key={aud.length}>Duration: {aud.length}s</p>)}
    </div>   
    </>
  )

}