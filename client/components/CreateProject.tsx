


export default function CreateProject() {


    return (
        // <div className="bg-slate-300 p-4 flex">
        // <form>
        //     <input placeholder="title" className="w-1/2"></input>
        //     <input placeholder="tempo" className='w-1/2'></input>
        //     <input placeholder="description" className='width full'></input>
        // </form>
        // </div>
        <div className="bg-white border border-slate-300 w-1/2 rounded-lg mx-auto mt-5 p-6 shadow-lg">
        <form className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-slate-700">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              className="mt-1 p-2 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="tempo" className="block text-sm font-medium text-slate-700">Tempo</label>
            <input
              type="text"
              id="tempo"
              placeholder="Tempo - BPM"
              className="mt-1 p-2 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-700">Description</label>
            <input
              type="text"
              id="description"
              placeholder="Description"
              className="mt-1 p-2 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
          <label htmlFor="audioFile" className="block text-sm font-medium text-slate-700">Upload Audio File</label>
          <input
            type="file"
            id="audioFile"
            accept="audio/*"
            className="mt-1 p-2 block w-full border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
          <div className="text-right">
          <button type="submit" className="w-24 bg-gradient-to-r from-blue-200 to-[#5ac0d9] text-slate-700 font-medium py-2 rounded-md hover:scale-105 shadow-md ease-in-out duration-100">Submit</button>
        </div>
        </form>
      </div>
    )
}