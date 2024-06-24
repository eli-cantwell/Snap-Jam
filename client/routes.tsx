import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Home from './components/Home.tsx'
import Projects from './components/Projects.tsx'
import Login from './components/Login.tsx'
import CreateProject from './components/CreateProject.tsx'

export default createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/create" element={<CreateProject />} />
      <Route />
    </Route>
    <Route path="/register" element={<Login />} />
  </>,
)
