import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AppHome from '../App'
import Services from './Services'
import Memberships from './Memberships'
import HealthBenefits from './HealthBenefits'
import About from './About'
import Booking from './Booking'
import Contact from './Contact'
import FAQ from './FAQ'

export default function LayoutRoutes(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white text-emerald-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/services" element={<Services />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/health-benefits" element={<HealthBenefits />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  )
}
