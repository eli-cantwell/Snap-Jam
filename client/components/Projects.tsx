import SingleProject from "./SingleProject"
import { useGetAllProjects } from "../hooks/useUsers"

export default function Projects() {

  const {data: projects, isPending, isError, error } = useGetAllProjects()

  if (isPending) return (<p>Loading...</p>)
  if (isError) {
    console.log({message: error})
    return (<p>There was an error: {`${error}`}</p>)
  }

  console.log(projects)
  // const testData = projects.map((project) => { audioData.find( aud => aud.project_id == project.id )})
  // console.log(testData)
  return (
    <>
    {/* <p>{JSON.stringify(projects)}</p> */}
    <h1>Projects</h1>
    {projects.map((project) => {
          return <SingleProject key={project.id} project={project}/>
    })}

    </>
  ) 
        
 }