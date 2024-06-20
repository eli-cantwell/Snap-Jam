import { User, UserData } from '../../models/users.ts'
import { Project, ProjectData } from '../../models/project.ts'
import db from './connection.ts'

// Users
export async function getAllUsers() {
  const user = await db('users').select()
  return user as UserData[]
}

export async function getUserById(id: number) {
  const user = await db('users').where({id}).first()
  return user as UserData[]
}

// project

export async function getAllProjects() {
  const project = await db('project').select()
  return project as ProjectData[]
}

export async function getProjectsById(id: number) {
  const project = await db('project').where({id}).first()
  return project as ProjectData[]
}

// comments

export async function getAllComments() {
    const comments = await db('comments').select()
    return comments
}

export async function getCommentById(id: number) {
    const comment = await db('comments').where({id}).first()
    return comment
}


// audio
export async function getAllAudio() {
    return await db('audio').select()
}

export async function getAudioById(id: number) {
    return await db('audio').where({id}).first()
}