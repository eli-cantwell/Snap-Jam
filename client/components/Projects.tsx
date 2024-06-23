import SingleProject from "./SingleProject"
import { useGetAllProjects } from "../hooks/useUsers"

export default function Projects() {

  const {data: projects, isPending, isError, error } = useGetAllProjects()

  if (isPending) return (<p>Loading...</p>)
  if (isError) {
    console.log({message: error})
    return (<p>There was an error: {`${error}`}</p>)
  }
  
  return (
    <>
    {projects.map((project) => {
          return <SingleProject key={project.id} project={project}/>
    })}

    </>
  ) 
        
 }