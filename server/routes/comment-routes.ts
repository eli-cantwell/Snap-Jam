import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/db.ts'

const router = Router()
export default router
// ALL
router.get('/', async (req, res) => {
  // if (!req.auth?.sub) {
  //   res.sendStatus(StatusCodes.UNAUTHORIZED)
  //   return
  // }
  try {
    const data = await db.getAllComments()
    res.json(data)
  } catch (e) {
    res.json({ message: `${e}` })
  }
})

router.get('/getdevcomments', async (req, res) => {
  try {
    const data = await db.getAllComments()
    res.json(data)
  } catch (e) {
    res.json({ message: `${e}` })
  }
})
// ID
router.get('/:id', checkJwt, async (req: JwtRequest, res) => {
  const { id } = await req.params
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }
  try {
    const data = db.getCommentById(Number(id))
    res.json(data)
  } catch (e) {
    res.json({ message: `${e}` })
  }
})

router.get('/project/:id', async (req, res) => {
  const { id } = await req.params
  // if (!req.auth?.sub) {
  //     res.sendStatus(StatusCodes.UNAUTHORIZED)
  //     return
  //   }
  try {
    const data = await db.getCommentsByProject(Number(id))
    console.log(data)
    res.json(data)
  } catch (e) {
    res.json({ message: `${e}` })
  }
})

router.get('/getdevcomments/:id', async (req, res) => {
  const { id } = req.params
  try {
    const data = await db.getCommentById(Number(id))
    res.json(data)
  } catch (e) {
    res.json({ message: `${e}` })
  }
})

// UPDATE

// CREATE

router.post('/addcomment', async (req, res) => {
  try {
    await db.addComment(req.body)
    res.sendStatus(200)
  } catch (e) {
    res.json({ message: `${e}` })
  }
})

// DELETE
