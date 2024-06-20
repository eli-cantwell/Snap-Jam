export interface ProjectData {
  project_name: string
  owner_id: number
  contributor_id: string
  tempo: number
  created_by: string
  comments: string
}

export interface Project extends ProjectData {
  id: number
}