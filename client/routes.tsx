import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Home from './components/Home.tsx'
import Projects from './components/Projects.tsx'
import Login from './components/Login.tsx'
import CreateProject from './components/CreateProject.tsx'
import Comments from './components/Comments.tsx'
import Register from './components/Register.tsx'

export default createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/create" element={<CreateProject />} />
      <Route path="/comments/project/:id" element={<Comments />} />
      <Route />
    </Route>
    <Route path="/register" element={<Login />} />
    <Route path="/localregister" element={<Register />} />
  </>,
)
