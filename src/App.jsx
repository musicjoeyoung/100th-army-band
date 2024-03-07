import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import History from './pages/History/History'
import MeetTheBand from './pages/MeetTheBand/MeetTheBand'
import Ensembles from './pages/Ensembles/Ensembles'
import Media from './pages/Media/Media'
import Jobs from './pages/Jobs/Jobs'
import Contact from './pages/Contact/Contact'
import ErrorNotFound from './pages/ErrorNotFound/ErrorNotFound'


function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/meettheband" element={<MeetTheBand />} />
        <Route path="/ensembles" element={<Ensembles />} />
        <Route path="/media" element={<Media />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
