import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Home from './components/Home.tsx'
import Projects from './components/Projects.tsx'
import Login from './components/Login.tsx'
export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    <Route />
    <Route path='/register' element ={<Login />}></Route>
  </Route>,
)
