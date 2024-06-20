import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Home from './components/Home.tsx'
import Projects from './components/Projects.tsx'
export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/projects" element={<Projects />} />
  </Route>,
)
