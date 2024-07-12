import express from 'express'
import * as Path from 'node:path'
import multer from 'multer'
import projectRoutes from './routes/project-routes.ts'
import commentRoutes from './routes/comment-routes.ts'
import audioRoutes from './routes/audio-routes.ts'

const server = express()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, Path.resolve('storage/uploads'))
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').at(-1)
    if (!['mp3', 'ogg', 'aac', 'wav'].includes(ext)) {
      cb(new Error(`bad extension: ${ext}`))
      return
    }

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + ext)
  },
})

const upload = multer({ storage: storage })

server.use(express.json())

server.use('/api/uploads', express.static(Path.resolve('storage/uploads')))

server.post('/api/v1/upload_audio', upload.single('my_audio'), (req, res) => {
  res.json({ path: req.file?.filename })
})

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
