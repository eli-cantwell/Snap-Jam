import express from 'express'
import * as Path from 'node:path'

import fruitRoutes from './routes/fruits.ts'
import userRoutes from './routes/user-routes.ts'
import projectRoutes from './routes/project-routes.ts'
import commentRoutes from './routes/comment-routes.ts'
import audioRoutes from './routes/audio-routes.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/projects', projectRoutes)
server.use('/api/v1/comments', commentRoutes)
server.use('/api/v1/audio', audioRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
