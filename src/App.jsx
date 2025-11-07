import Navbar from './componenets/Navbar'
import Hero from './componenets/Hero'
import Features from './componenets/Features'
import Pricing from './componenets/Pricing'
import Testimonials from './componenets/Testimonials'
import Footer from './componenets/Footer'
import { useState , useEffect} from 'react'

function App() {
 const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar scrolled={scrolled} />
      <Hero/>
      <Features/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
