import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import { Header, Footer } from './components/layout'
import { HomePage, MenuPage, AboutPage, ServicesPage, NotFoundPage } from './pages'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/quienes-somos" element={<AboutPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
