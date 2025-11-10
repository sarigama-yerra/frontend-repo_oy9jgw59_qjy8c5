import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Accomplishments from './pages/Accomplishments'
import Services from './pages/Services'
import About from './pages/About'
import Media from './pages/Media'
import Contact from './pages/Contact'
import Legal from './pages/Legal'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/accomplishments" element={<Accomplishments/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/media" element={<Media/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/legal" element={<Legal/>} />
    </Routes>
  )
}
