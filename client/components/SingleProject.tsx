
import { Audio } from "../../models/Audio"
import { audio } from "../hooks/useUsers"
import { Project } from "../../models/project"

interface Props {
  project: Project
  key: number

}

export default function SingleProject(props: Props) {
  console.log('HEllO!')

  // const {data: projects, isPending, isError, error} =  useGetProjectById(props.id)
  const {data: audioData, isPending: isPendingAudio, isError: isAudioError, error: audioError } = audio.useGetAudioByProjectId(Number(props.project.id))

  // if (isPending) return (<p>Loading...</p>)
  // if (isError) {
  //   console.log({message: error})
  //   return (<p>There was an error: {`${error}`}</p>)
  // }

  if (isPendingAudio) { console.log('loading audio'); return <p>Audio Loading...</p>}
  if (isAudioError) {return <p>{`${audioError}`}</p>}

  return (
    <>
    <div className="bg-white border-r-2 border-l-2 border-r-slate-400 border-l-slate-400 h-auto w-1/2 rounded-lg m-auto border-t-slate-300 border-t-2 border-b-slate-600 border-b-2 mt-5 overflow-auto pb-4 shadow-lg shadow-slate-300">
      <div className="bg-[#5ac0d9] w-full p-2 mb-4 pr-2 rounded-t-md border-[#2e7283] flex justify-between align-middle">
        <p className="ml-2 text-2xl font-semibold text-slate-800">{props.project.project_name}</p>
        <p className="text-lg ml-4 text-slate-800 font-semibold mr-2" >By: {props.project.created_by}</p>
      </div>
    
      
      {audioData.map((aud: Audio) => <p className=" ml-4" key={aud.id}>{aud.filepath}</p>)}
      {audioData.map((aud: Audio) => <p className=" ml-4 font-normal text-gray-500" key={aud.length}>Duration: {aud.length}s</p>)}
    </div>   
    </>
  )

}