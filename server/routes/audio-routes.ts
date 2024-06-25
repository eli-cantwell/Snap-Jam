import { Router } from 'express'
// import checkJwt, { JwtRequest } from '../auth0.ts'
// import { StatusCodes } from 'http-status-codes'

import * as db from '../db/db.ts'
import { AudioData } from '../../models/Audio.ts'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'

const router= Router()
export default router
// ALL
router.get('/', async (req, res) => {
    // if (!req.auth?.sub) {
    //     res.sendStatus(StatusCodes.UNAUTHORIZED)
    //     return
    //   }
    try {
        const data = await db.getAllAudio()
        res.json (data)
    }
    catch (e) {
        res.json({"message" : `${e}`})
    }
})

router.get('/getdevaudio', async (req, res) => {
    try {
        const data = await db.getAllAudio()
        res.json (data)
    }
    catch (e) {
        res.json({"message" : `${e}`})
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
        const data = await db.getAudioById(Number(id))
        res.json (data)
    }
    catch (e) {
        res.json({"message" : `${e}`})
    }
})

router.get('/byProject/:id', async (req, res) => {
    const { id } = req.params
    // if (!req.auth?.sub) {
    //     res.sendStatus(StatusCodes.UNAUTHORIZED)
    //     return
    //   }
    try {
        const data = await db.getAudioByProject(Number(id))
        res.json (data)
    }
    catch (e) {
        res.json({"message" : `${e}`})
    }
})

router.get('/getdevaudio/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await db.getAudioById(Number(id))
        res.json (data)
    }
    catch (e) {
        res.json({"message" : `${e}`})
    }
})
// ID

// UPDATE

// CREATE

router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
    if (!req.auth?.sub) {
        res.sendStatus(StatusCodes.UNAUTHORIZED)
        return
    }
     try {
      const data: AudioData = req.body
      const response = await db.createAudio(data)
      res.json({response, id: data.project_id}).status(StatusCodes.CREATED)
} catch (err) {
    next(err)
  }
})

// DELETE