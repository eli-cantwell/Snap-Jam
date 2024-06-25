import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
// import { StatusCodes } from 'http-status-codes'
import { ProjectData} from '../../models/project.ts'
import * as db from '../db/db.ts'
import { StatusCodes } from 'http-status-codes'

const router = Router()


// ALL
router.get('/', async (req, res) => {
  // if (!req.auth?.sub) {
  //     res.sendStatus(StatusCodes.UNAUTHORIZED)
  //     return
  //   }
  try {
    const data = await db.getAllProjects()
    res.json(data)
  } catch (e) {
    res.json({ message: `${e}` })
  }
})

router.get('/getdevprojects', async (req, res) => {
  try {
    const data = await db.getAllProjects()
    res.json(data)
  } catch (e) {
    res.json({ message: `${e}` })
  }
})
// ID
router.get('/:id', async (req, res) => {
  const { id } = req.params
  // if (!req.auth?.sub) {
  //     res.sendStatus(StatusCodes.UNAUTHORIZED)
  //     return
  //   }
  try {
    const data = await db.getProjectsById(Number(id))
    res.json(data)
  } catch (e) {
    res.json({ message: `${e}` })
  }
})

router.get('/getdevprojects/:id', async (req, res) => {
  const { id } = req.params
  try {
    const data = await db.getProjectsById(Number(id))
    res.json(data)
  } catch (e) {
    res.json({ message: `${e}` })
  }
})


// UPDATE

router.patch('/updateproject', async (req, res) => {
  const project = req.body
  try {
    await db.updateProjectById(project)
  } catch (e) {
    res.json({ message: `${e}` })
  }
})

// CREATE
router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
    if (!req.auth?.sub) {
        res.sendStatus(StatusCodes.UNAUTHORIZED)
        return
    }
     try {
      const data: ProjectData = req.body
      const response = await db.createProject(data)
      res.json({response}).status(StatusCodes.CREATED)
} catch (err) {
    next(err)
  }
})

// DELETE

router.delete('/:id', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
      res.sendStatus(StatusCodes.UNAUTHORIZED)
      return
  }
   try {
    const id = Number(req.params.id)
    await db.deleteProjectById(id)
    res.sendStatus(StatusCodes.CREATED)
} catch (err) {
  next(err)
}
})

export default router