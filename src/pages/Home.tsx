import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Cases from '../sections/Cases'
import WhyKwork from '../sections/WhyKwork'
import Process from '../sections/Process'
import Stats from '../sections/Stats'
import FAQ from '../sections/FAQ'
import Contacts from '../sections/Contacts'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Cases />
        <WhyKwork />
        <Process />
        <Stats />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}
