import SingleProject from './SingleProject'
import { useGetAllProjects } from '../hooks/useUsers'
import Comments from './Comments'
import CommentForm from './CommentForm'

export default function Projects() {
  const { data: projects, isPending, isError, error } = useGetAllProjects()

  if (isPending) return <p>Loading...</p>
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
          <div key={project.id} className="single-project-div border-b-2">
            <div className="single-project-info-div">
              <SingleProject project={project} />
            </div>
          </div>
        ))}
    </>
  )
}
