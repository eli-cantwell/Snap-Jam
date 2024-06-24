import express from 'express'
import * as Path from 'node:path'
import multer from 'multer'
import fruitRoutes from './routes/fruits.ts'
import userRoutes from './routes/user-routes.ts'
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

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + ext)
  }
})

const upload = multer({ storage: storage })

server.use(express.json())

server.use('/api/v1/uploads', express.static(Path.resolve('storage/uploads')))

//From the docs:

// server.post('/profile', function (req, res) { 
//   upload(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//       // A Multer error occurred when uploading
//     } else if (err) {
//       // An unknown error occurred when uploading.
//     }

//     // Everything went fine.
//   })
// })

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
