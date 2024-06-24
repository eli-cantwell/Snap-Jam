import { User } from '../../models/users.ts'
import { Project, ProjectData } from '../../models/project.ts'
import db from './connection.ts'

// Users
export async function getAllUsers() {
  const user = await db('users').select()
  return user as User[]
}

export async function getUserById(id: number) {
  const user = await db('users').where({ id }).first()
  return user as User
}

export async function getUserByAuthId(authId: string) {
  const result = await db('users').where('auth0_id', authId).first()
  return result as User
}
// project

export async function getAllProjects() {
  const project = await db('project').select()
  return project as Project[]
}

export async function getProjectsById(id: number) {
  const project = await db('project').where({ id }).first()
  return project as Project[]
}

export async function createProject(project: ProjectData) {
  return db('project').insert(project)
}

export async function deleteProjectById(id: number): Promise<Project> {
  return db('project').where({ id }).del()
}
// comments

export async function getAllComments() {
  const comments = await db('comments').select()
  return comments
}

export async function getCommentById(id: number) {
  const comment = await db('comments').where({ id }).first()
  return comment
}

export async function addComment(comment) {
  await db('comments').insert(comment)
}

export async function getCommentsByProject(id: number) {
  console.log('hello')
  const comments = await db('comments').where('for', id).select()
  console.log(comments)
  return comments
}

// audio
export async function getAllAudio() {
  return await db('audio').select()
}

export async function getAudioById(id: number) {
  return await db('audio').where({ id }).first()
}

export async function getAudioByProject(projId: number) {
  return await db('audio').where({ project_id: projId })
}
