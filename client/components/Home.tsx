export default function Home() {
  const mockProjects = [
    {
      id: 1,
      project_name: 'Cool Project',
      owner_id: 1,
      contributor_id: [1, 2],
      tempo: 120,
      comments: [1, 2],
    },
    {
      id: 2,
      project_name: 'King shit',
      owner_id: 2,
      contributor_id: [2, 3], //Yo is this all pushed up? If not can we please do that, chur. Love your work!
      tempo: 120,
      comments: [3, 4],
    },
    {
      id: 3,
      project_name: 'auwhdiuhwd',
      owner_id: 4,
      contributor_id: [4, 2, 1],
      tempo: 120,
      comments: [5, 6, 7],
    },
  ]

  return (
    <div>
      {mockProjects.map((project) => (
        <div className="project-div" key={project.id}>
          <div>
            <h1>Project Name: {project.project_name}</h1>
            <p>Contributors: {project.contributor_id}</p>
            <p>Tempo: {project.tempo}</p>
          </div>
          <div>
            <p>Comments: {project.comments}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
