import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedServices from './components/FeaturedServices'
import Testimonials from './components/Testimonials'
import InstagramFeed from './components/InstagramFeed'
import Footer from './components/Footer'

function Home(){
  return (
    <>
      <Hero />
      <FeaturedServices />
      <Testimonials />
      <InstagramFeed />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white text-emerald-900">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}
