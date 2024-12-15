import {BrowseRouter as  Router, Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Project from './pages/Project'
import Home from './pages/Home'

export default function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signin' element={<SignIn />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/about' element={<Project />}/>
    </Routes>
  </Router>
  )
}


