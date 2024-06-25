// import { Audio } from "../../models/Audio"
import { audio, useUpdateProjectById} from '../hooks/useUsers'
import { Project, ProjectData } from '../../models/project'
import Comments from './Comments'
import CommentForm from './CommentForm'
import { useState } from 'react'
import { usePlayer } from '../player'
import AudioButton from "./AudioButton"
import request from 'superagent'
import { FormEvent } from 'react'
import { AudioData } from '../../models/Audio'
import { useAuth0 } from '@auth0/auth0-react'
import { ChangeEvent } from 'react'




interface Props {
  project: Project
}

export default function SingleProject(props: Props) {
  //STATES
  const [commentsBool, setCommentsBool] = useState(false)
  const [jamBool, setJamBool] = useState(false)
  const [remixBool, setRemixBool] = useState(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5); // State to store volume


  //HOOKS
  const player = usePlayer()
  const audioHook = audio.useCreateAudio()
  const {user: userData} = useAuth0()
  const updateProject = useUpdateProjectById()

  const {
    data: audioData,
    isPending: isPendingAudio,
    isError: isAudioError,
    error: audioError,
  } = audio.useGetAudioByProjectId(Number(props.project.id))

  async function handleJam() {
    if (!audioData) {
      return
    }
    await player.load(audioData.map((data) => `/api/uploads/${data.filepath}`))
    player.play()
    setPlaying(true)
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
   
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    player.setVolume(newVolume); // Update player volume
  };


  const handleFileChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files?.[0];
    if (file) {
      setAudioFile(file);
    }
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    if (!audioFile) { console.error('No File'); return }

    //prepare file to be sent
    const file = audioFile
    const fd = new FormData()
    fd.set('my_audio', file)

    //Send audio file to server, and save the filepath
    const { body: filepath} = await request.post('/api/v1/upload_audio').send(fd)
    
    // setup constants needed to establish the project data
    const newFilePath = filepath.path
    const userName = String(userData?.nickname)
    const owner = String(userData?.sub)

    //establish project data
    const updatedProject: ProjectData = {
      project_name: props.project.project_name,
      description: props.project.description,
      owner_id: owner,
      contributor_id: [...props.project.contributor_id, userName],
      tempo: props.project.tempo,
      created_by: userName,
      comments: [...props.project.comments]
    }
    
    
    try {
      //TODO update project
      const updatedProjectResult = await updateProject.mutateAsync(updatedProject)
      console.log(updatedProjectResult)
      //establish audio data
      const audioObject: AudioData = {
        filepath: newFilePath,
        project_id: props.project.id,
        length: 0,
        created: String(Date()),
        created_by: userName

      }
      // Pushing the new audio entry to the db
      const audioResponse = await audioHook.mutateAsync(audioObject)
      console.log(audioResponse)
    }
    catch (e) {
      console.error('Error creating project', e)
    }

    setAudioFile(null)
    // notify()
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

          <p className='text-slate-600 mb-4'>{props.project.tempo} BPM</p>
          <p className='mb-4 text-lg'>{props.project.description}</p>
        </div>

        <div className="absolute bottom-4 right-4 space-x-2">
        {!playing ? <button className="w-32 h-12 rounded-md bg-slate-100 py-2 font-medium text-slate-700 shadow-md duration-100 ease-in-out hover:scale-105 hover:shadow-lg" onClick={handleJam}>
            Play
          </button> : <button className="w-32 h-12 rounded-md bg-slate-100 py-2 font-medium text-slate-700 shadow-md duration-100 ease-in-out hover:scale-105 hover:shadow-lg" onClick={() => {setPlaying(false); player.pause()}}>Stop</button>}
          <button className="w-32 h-12 rounded-md bg-slate-100 py-2 font-medium text-slate-700 shadow-md duration-100 ease-in-out hover:scale-105 hover:shadow-lg" onClick={handleJamClick}>
            Jam
          </button>
          <button
            onClick={handleComments}
            className="w-32 h-12 rounded-md bg-slate-100 py-2 font-medium text-slate-700 shadow-md duration-100 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            Comments
          </button>
          <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />

        </div>
      </div>
      {commentsBool && (
        <div className="relative mx-auto mt-5 h-auto w-1/2 rounded-lg border border-slate-300 bg-white pb-4 shadow-lg">
          <Comments id={props.project.id} />
          <CommentForm for={props.project.id} />
        </div>
      )}
      {jamBool && (<div className="mx-auto mt-5 h-auto w-1/2 rounded-lg border border-slate-300 bg-white shadow-lg p-4 ease-out duration-200">

          {audioData.map((aud) => (
            // <div key={aud.id} className='pb-2 placeholder-blue-200'>
            //   <p className="text-gray-800">{`/api/uploads/${aud.filepath}`}</p>

            //   {!player.isPlaying() ? <button onClick={
            //     async () => {await player.load([`/api/uploads/${aud.filepath}`]); player.play(); setPlayToggle(true)}}
            //      className='w-24 h-12 rounded-md shadow-md hover:scale-105 bg-slate-100'>play</button> : <button className='w-24 h-12 rounded-md shadow-md hover:scale-105 bg-slate-100' onClick={() => {player.pause(); setPlayToggle(false)}}>Stop</button>}
            
            // </div>
            <div key={aud.id}><AudioButton audio={aud}/>
            {/* <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      /> */}
      </div>
            
          ))}
        <button className='w-32 h-12 bg-[#5ac0d9] mt-8 rounded-md shadow-md hover:bg-slate-300 ease-linear duration-[100ms]'
        onClick={() => {setRemixBool(!remixBool)}}>Remix</button>
        {remixBool && (<div>

          <form onSubmit={handleSubmit}>
            <input onChange={handleFileChange} type='file' placeholder='upload your file!' accept='audio/*' className='mt-4 m-auto px-2 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white'></input>
            <button type='submit' className='w-32 h-12 bg-[#5ac0d9] mt-4 rounded-md shadow-md hover:bg-slate-300 ease-linear duration-[100ms]'>Submit</button>
          </form>

          </div>)}
      </div>)}
    </>
  )
}
//bg-[#5ac0d9]
