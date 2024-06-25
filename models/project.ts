export interface ProjectData {
  project_name: string,
  description: string,
  owner_id: string
  contributor_id: string[]
  tempo: string
  created_by: string
  comments: []
}

export interface Project extends ProjectData {
  id: number
}