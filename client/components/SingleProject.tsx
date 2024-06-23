
//import { Audio } from "../../models/Audio"
import { audio, comments } from "../hooks/useUsers"
import { Project } from "../../models/project"
//import { useState } from "react"

interface Props {
  project: Project
  key: number

}

export default function SingleProject(props: Props) {
  //const {commentsBool, setCommentsBool} = useState(false)


  const {data: audioData, isPending: isPendingAudio, isError: isAudioError, error: audioError } = audio.useGetAudioByProjectId(Number(props.project.id))
  //const {data: commentsData, isPending: isPendingComments, isError: isCommentsError, error: commentError} = comments.useGetAllComments() //TODO get comments by project id //TODO add pending and error test


  if (isPendingAudio) { console.log('loading audio'); return <p>Audio Loading...</p>}
  if (isAudioError) {return <p>{`${audioError}`}</p>}

  return (

    <>
      <div className="relative bg-white border border-slate-300 h-auto w-1/2 rounded-lg mx-auto mt-5 overflow-auto pb-4 shadow-lg">
        <div className="bg-gradient-to-r from-blue-200 to-[#5ac0d9] border-b border-slate-200 w-full p-4 rounded-t-lg flex justify-between items-center">
          <p className="text-2xl font-semibold text-slate-800">{props.project.project_name}</p>
          <p className="text-lg text-slate-800 font-semibold">By: {props.project.created_by}</p>
        </div>

        <div className="p-4">
          {audioData.map((aud) => (
            <div key={aud.id} className="mb-2">
              <p className="text-gray-800">{aud.filepath}</p>
              <p className="font-normal text-gray-500">Duration: {aud.length}s</p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 right-4 space-x-2">
          <button className="w-26 bg-slate-100 text-slate-700 font-medium py-2 rounded-md hover:scale-105 shadow-md ease-in-out duration-100">Jam</button>
          <button className="w-26 bg-slate-100 text-slate-700 font-medium py-2 rounded-md hover:scale-105 shadow-md ease-in-out duration-100">Comments</button>
        </div>
      </div>
    </>
  )
}


//bg-[#5ac0d9