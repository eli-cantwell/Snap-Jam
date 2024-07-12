import SingleProject from './SingleProject'
import { useGetAllProjects } from '../hooks/useUsers'
import { NavLink } from 'react-router-dom'

export default function Projects() {
  const { data: projects, isPending, isError, error } = useGetAllProjects()

  if (isPending)
    return <p className="mt-6 text-center text-5xl font-bold">Loading...</p>
  if (projects == null) {
    return (
      <>
        <h1 className="mt-6 text-center text-5xl font-bold">No Projects</h1>
        <div className="mt-4 text-center">
          <NavLink className="m-auto" to="/create">
            <button className="m-auto h-1/2 w-[6em] rounded-md bg-black text-center text-white">
              Add Project
            </button>
          </NavLink>
        </div>
      </>
    )
  }
  if (isError) {
    console.log({ message: error })
    return <p>There was an error: {`${error}`}</p>
  }

  console.log(projects)

  return (
    <>
      {projects
        .slice()
        .reverse()
        .map((project) => (
          <div key={project.id} className="single-project-div">
            <div className="single-project-info-div">
              <SingleProject project={project} />
            </div>
          </div>
        ))}
    </>
  )
}
