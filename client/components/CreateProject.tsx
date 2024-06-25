import { useAuth0 } from "@auth0/auth0-react"
import { useState } from "react"
import { ChangeEvent } from "react"
import { FormEvent } from "react"
import request from "superagent"
import { audio, useCreateProject } from "../hooks/useUsers"
import { ProjectData } from "../../models/project"
import { AudioData } from "../../models/Audio"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
// import { user } from "../hooks/useUsers"
//import { ProjectData } from "../../models/project"
//import { AudioData } from "../../models/Audio"


export default function CreateProject() {

  const {user: userData} = useAuth0()
  const projectHook = useCreateProject()
  const audioHook = audio.useCreateAudio()

  const notify = () => toast("Project created succesfully")


  // const {data, isPending, isError, error} = user.useGetUserByAuthId(userData?.sub)

  const [formState, setFormState] = useState({
    project_name: '',
    description: '',
    owner_id: '',
    contributor_id: [],
    tempo: '',
    created_by: '',
    comments: [],
  })

  const [audioFile, setAudioFile] = useState<File | null>(null)

  const handleChange = (
    evt: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { id, value } = evt.target
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleAudioChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files?.[0];
    if (file) {
      setAudioFile(file);
    }
  };



  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    console.log('click!')


    if (!audioFile) { console.error('No File'); return }


    const file = audioFile
    const fd = new FormData()
    fd.set('my_audio', file)


    const { body: filepath} = await request.post('/api/v1/upload_audio').send(fd)
    
    console.log(filepath)
    const newFilePath = filepath.path

    const userName = String(userData?.nickname)
    const owner = String(userData?.sub)

    //establish project

    const newProj: ProjectData = {
      project_name: formState.project_name,
      description: formState.description,
      owner_id: owner,
      contributor_id: [],
      tempo: formState.tempo,
      created_by: userName,
      comments: []
    }

    try {
      const {response: id} = await projectHook.mutateAsync(newProj)
      console.log(filepath)
      console.log(id)

      const audioObject: AudioData = {
        filepath: newFilePath,
        project_id: id,
        length: 0,
        created: String(Date()),
        created_by: userName

      }

      const audioResponse = await audioHook.mutateAsync(audioObject)
      console.log(audioResponse)
    }
    catch (e) {
      console.error('Error creating project', e)
    }

    setFormState({
      project_name: '',
      description: '',
      owner_id: '',
      contributor_id: [],
      tempo: '',
      created_by: '',
      comments: [],
    })
    setAudioFile(null)
    notify()
  }



    return (
      <div>
        <div className="bg-gradient-to-br from-blue-200 to-[#5ac0d9] border border-slate-300 w-1/2 rounded-lg mx-auto mt-5 p-6 shadow-lg">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-slate-700">Title</label>
            <input
              type="text"
              id="project_name"
              placeholder="Title"
              className="mt-1 p-2 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={formState.project_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="tempo" className="block text-sm font-medium text-slate-700">Tempo</label>
            <input
              type="text"
              id="tempo"
              placeholder="Tempo - BPM"
              className="mt-1 p-2 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={formState.tempo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-700">Description</label>
            <input
              type="text"
              id="description"
              placeholder="Description"
              className="mt-1 p-2 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={formState.description}
              onChange={handleChange}
            />
          </div>
          <div>
          <label htmlFor="audioFile" className="block text-sm font-medium text-slate-700">Upload Audio File</label>
          <input
            type="file"
            id="audioFile"
            accept="audio/*"
            className="mt-1 p-2 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
            onChange={handleAudioChange}
            required
          />
        </div>
          <div className="text-right">
          <button type="submit" className="w-24 bg-white text-slate-700 font-medium py-2 rounded-md hover:scale-105 shadow-md ease-in-out duration-100">Submit</button>
        </div>
        </form>
      </div>
      <ToastContainer />
      </div>
    )
}