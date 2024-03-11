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
import Footer from './components/Footer/Footer'
import TermsOfUse from './pages/TermsOfUse/TermsOfUse'

console.log(
  '%c🌐 Want a stunning website?? 🚀 %cReach out to%c Joe Young %cjoseph.m.young2@gmail.com',
  'color: #51355a; font-size: 18px; font-weight: bold; text-shadow: 2px 2px 4px rgba(81, 53, 90, 0.5);',
  'color: #3498db; font-size: 18px; font-weight: bold; text-decoration: underline;',
  'color: #e74c3c; font-size: 18px; font-weight: bold;',
  'color: #e67e22; font-size: 18px; font-weight: bold;'
);

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
        <Route path="termsofuse" element={<TermsOfUse />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
