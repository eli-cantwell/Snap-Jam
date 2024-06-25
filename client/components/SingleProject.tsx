// import { Audio } from "../../models/Audio"
import { audio} from '../hooks/useUsers'
import { Project } from '../../models/project'

import Comments from './Comments'
import CommentForm from './CommentForm'
import { useState } from 'react'
//import { useState } from "react"
// import { whatever } from './AudioMerge'
import { usePlayer } from '../player'
import AudioButton from "./AudioButton"


interface Props {
  project: Project
}

export default function SingleProject(props: Props) {
  const [commentsBool, setCommentsBool] = useState(false)
  const [jamBool, setJamBool] = useState(false)
  const player = usePlayer()

  const {
    data: audioData,
    isPending: isPendingAudio,
    isError: isAudioError,
    error: audioError,
  } = audio.useGetAudioByProjectId(Number(props.project.id))
  //const {data: commentsData, isPending: isPendingComments, isError: isCommentsError, error: commentError} = comments.useGetAllComments() //TODO get comments by project id //TODO add pending and error test
  async function handleJam() {
    if (!audioData) {
      return
    }
    await player.load(audioData.map((data) => `/api/uploads/${data.filepath}`))
    player.play()
  }

  if (isPendingAudio) {
    console.log('loading audio')
    return <p>Audio Loading...</p>
  }
  if (isAudioError) {
    return <p>{`${audioError}`}</p>
  }

  function handleComments() {
    setCommentsBool(!commentsBool)
  }

  function handleJamClick() {
    setJamBool(!jamBool)
  }

  return (
    <>
      <div className="relative mx-auto h-auto w-1/2 overflow-auto rounded-lg border border-slate-300 bg-white pb-4 shadow-lg">
        <div className="flex w-full items-center justify-between rounded-t-lg border-b border-slate-200 bg-gradient-to-r from-blue-200 to-[#5ac0d9] p-4">
          <p className="text-2xl font-semibold text-slate-800">
            {props.project.project_name}
          </p>
          <p className="text-lg font-semibold text-slate-800">
            By: {props.project.created_by}
          </p>
        </div>

        <div className="p-4 mb-4">

          <p className='text-slate-600 mb-4'>{props.project.tempo}</p>
          <p>{props.project.description}</p>
        </div>

        <div className="absolute bottom-4 right-4 space-x-2">
        <button className="w-32 h-12 rounded-md bg-slate-100 py-2 font-medium text-slate-700 shadow-md duration-100 ease-in-out hover:scale-105 hover:shadow-lg" onClick={handleJam}>
            Play
          </button>
          <button className="w-32 h-12 rounded-md bg-slate-100 py-2 font-medium text-slate-700 shadow-md duration-100 ease-in-out hover:scale-105 hover:shadow-lg" onClick={handleJamClick}>
            Jam
          </button>
          <button
            onClick={handleComments}
            className="w-32 h-12 rounded-md bg-slate-100 py-2 font-medium text-slate-700 shadow-md duration-100 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            Comments
          </button>
        </div>
      </div>
      {commentsBool && (
        <div className="relative mx-auto mt-5 h-auto w-1/2 rounded-lg border border-slate-300 bg-white pb-4 shadow-lg">
          <Comments id={props.project.id} />
          <CommentForm for={props.project.id} />
        </div>
      )}
      {jamBool && (<div className="mx-auto mt-5 h-auto w-1/2 rounded-lg border border-slate-300 bg-white shadow-lg p-4">

          {audioData.map((aud) => (
            // <div key={aud.id} className='pb-2 placeholder-blue-200'>
            //   <p className="text-gray-800">{`/api/uploads/${aud.filepath}`}</p>

            //   {!player.isPlaying() ? <button onClick={
            //     async () => {await player.load([`/api/uploads/${aud.filepath}`]); player.play(); setPlayToggle(true)}}
            //      className='w-24 h-12 rounded-md shadow-md hover:scale-105 bg-slate-100'>play</button> : <button className='w-24 h-12 rounded-md shadow-md hover:scale-105 bg-slate-100' onClick={() => {player.pause(); setPlayToggle(false)}}>Stop</button>}
            
            // </div>
            <div key={aud.id}><AudioButton audio={aud}/></div>
            
          ))}

      </div>)}
    </>
  )
}
//bg-[#5ac0d9
