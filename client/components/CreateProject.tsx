import { useState } from "react"
import { ChangeEvent } from "react"
//import { ProjectData } from "../../models/project"
//import { AudioData } from "../../models/Audio"


export default function CreateProject() {

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
      console.log(file)
    }
  };





  const handleSubmit = () => {
    console.log(formState, audioFile)

    const fd = new FormData()
    fd.append("project_name", formState.project_name);
    fd.append("description", formState.description);
    fd.append("tempo", formState.tempo);
    if (audioFile) {
      fd.append("audioFile", audioFile);
    }

    console.log(fd)
  }

    return (
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
    )
}