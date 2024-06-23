import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Home from './components/Home.tsx'
import Projects from './components/Projects.tsx'
import Login from './components/Login.tsx'
import Comments from './components/Comments.tsx'
export default createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/comments/project/:id" element={<Comments />} />
      <Route />
    </Route>
    <Route path="/register" element={<Login />} />
  </>,
)
