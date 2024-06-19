import { User, UserData, project, projectData } from '../../models/users.ts'
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

export async function getAllProjects

export async function getProjectsBYId(id: number) {
  const project = await db('projects').where({id}).first()
}



// comments



// audio