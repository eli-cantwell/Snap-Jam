import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/db.ts'

const router = Router()
export default router

// ALL
router.get('/', checkJwt, async (req: JwtRequest, res) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }
  try {
    const data = await db.getAllUsers()
    res.json(data)
  } catch (e) {
    res.json({ message: `${e}` })
  }
})
// <--->

router.get('/getdevusers', async (req, res) => {
  try {
    const data = await db.getAllUsers()
    res.json(data)
  } catch (e) {
    res.json({ message: `${e}` })
  }
})

// <--->
// ID
router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const data = await db.getUserById(Number(id))
        res.json (data)
    }
    catch (e) {
        res.json({"message" : `${e}`})
    }
})

router.get('/auth0/:id', async (req, res) => {

    const {id} = req.params

    try { 
        const data = await db.getUserByAuthId(id) 
        res.json(data)
    } 
    catch (e) {
        res.json({"message" : `${e}`})
    }
})


// <--DEV-->

router.get('/getdevusers/:id', async (req, res) => {
  const { id } = req.params
  try {
    const data = await db.getUserById(Number(id))
    res.json(data)
  } catch (e) {
    res.json({ message: `${e}` })
  }
})
// <--->

// UPDATE

// CREATE

router.post('/addUser', async (req, res) => {
  const user = req.body
  try {
    await db.addUser(user)
  } catch (e) {
    res.json({ message: `${e}` })
  }
})

// DELETE
