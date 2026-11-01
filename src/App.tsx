import { AboutSection } from './components/AboutSection'
import { Footer } from './components/Footer'
import { GallerySection } from './components/GallerySection'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { MenuSection } from './components/MenuSection'
import { VisitSection } from './components/VisitSection'

function App() {
  return (
    <>
      <a className="skip-link" href="#content">
        Перейти к содержимому
      </a>
      <Header />
      <main id="content">
        <Hero />
        <Marquee />
        <MenuSection />
        <AboutSection />
        <GallerySection />
        <VisitSection />
      </main>
      <Footer />
    </>
  )
}

export default App
